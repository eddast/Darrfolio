import { motion } from 'framer-motion'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useDebounce, useWindowScroll } from 'react-use'
import { Box } from 'ui/core'

const DELAY_IN_MS = 100

export const JellyScroll: FC<{ children: ReactNode[]; maxSkew?: number }> = ({
  children,
  maxSkew = 5,
}) => {
  const [debouncedPos, setDebouncedPos] = useState<number>(0)
  const [velocity, setVelocity] = useState(0)
  const [debouncedVelocity, setDebouncedVelocity] = useState<number>(0)
  const { y } = useWindowScroll()

  useDebounce(
    () => {
      if (velocity !== debouncedVelocity) {
        setDebouncedVelocity(velocity)
      }
    },
    DELAY_IN_MS,
    [velocity],
  )

  useDebounce(
    () => {
      if (y !== debouncedPos) {
        setDebouncedPos(y)
      }
    },
    DELAY_IN_MS,
    [y],
  )

  useEffect(() => {
    setVelocity(y - (debouncedPos || 0))
  }, [y])

  useEffect(() => {
    setTimeout(() => {
      setVelocity(0)
    }, 150)
  }, [velocity])

  return (
    <Box display="flex" justifyContent="center">
      <Box width="10/12">
        <div
          style={{
            padding: 50,
          }}
        >
          {children.map((child, index) => (
            <motion.div
              animate={{
                skewY:
                  velocity * 0.5 >= maxSkew
                    ? maxSkew
                    : velocity * 0.5 <= -maxSkew
                    ? -maxSkew
                    : velocity * 0.5,
              }}
              transition={{
                times: [-1, 0, 1],
                bounceDamping: 0.3,
                duration: velocity === 0 ? 0.8 : 0.3,
              }}
              key={index}
              style={{
                width: '100%',
              }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </Box>
    </Box>
  )
}

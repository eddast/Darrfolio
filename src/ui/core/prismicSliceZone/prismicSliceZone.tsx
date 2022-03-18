import React, { FC } from 'react'

interface PrismicSliceZoneSlice {
  slice_type: string
  slice_label: string | null
}

export type PrismicSliceZoneMapper = {
  [key: string]: FC<any>
}

interface Props {
  mapper: PrismicSliceZoneMapper
  slices: Array<PrismicSliceZoneSlice>
}

export const PrismicSliceZone: FC<Props> = ({ slices, mapper }) => (
  <>
    {slices.map((slice, index) => {
      const Component = mapper[slice.slice_type]
      return Component ? <Component key={index} {...slice} /> : null
    })}
  </>
)

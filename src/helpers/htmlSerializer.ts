/**
 * Helper til að parsa Prismic Rich Text yfir í HTML
 * Ég vel sjálf hvað ég vil að hægt sé að birta (t.d. vil ég ekki birta embedda og eh)
 * og ég vel líka hvaða element representa hvað, þannig h1 er ekki <h1> heldur <Text> hjá mér
 * Þannig hef ég full control hvernig rich textinn birtist í framendanum hjá mér
 */
import React, { ReactNode } from 'react'
import { Elements, HTMLSerializer } from 'prismic-reactjs'
import Router from 'next/router'
import { linkResolver } from './linkResolver'
import { Text } from 'ui/core'
import { List, ListItem, OrderedList, OrderedListItem } from 'ui/core'

const onClickHandler = function (href: string, as: string) {
  // Handler that will do routing imperatively on internal links
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    Router.push(href, as)
  }
}

const propsWithUniqueKey = function (props: any, key: any) {
  return Object.assign(props || {}, { key })
}

export const htmlSerializer: HTMLSerializer<ReactNode> = function (
  type,
  element,
  content,
  children,
  key,
) {
  let props = {}

  switch (type) {
    case Elements.hyperlink: {
      if (element.data.link_type === 'Document') {
        // Only for internal links add the new onClick that will imperatively route to the appropiate page
        props = Object.assign({
          onClick: onClickHandler(
            linkResolver(element.data),
            linkResolver(element.data),
          ),
          href: linkResolver(element.data),
          size: 'largeBold',
          variant: 'blue',
        })
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      } else {
        // Default link handling
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {}
        const relAttr = element.data.target ? { rel: 'noopener' } : {}
        props = Object.assign(
          {
            href: element.data.url || linkResolver(element.data),
            size: 'largeBold',
            variant: 'blue',
          },
          targetAttr,
          relAttr,
        )
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      }
    }
    case Elements.heading1: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [2, 2, 3],
            variant: 'h1',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading2: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [2, 2, 3],
            variant: 'h2',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading3: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [2, 2, 3],
            variant: 'h3',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading4: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [1, 1, 2],
            variant: 'h3',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading5: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [1, 1, 2],
            variant: 'h5',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading6: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pb: [1, 1, 2],
            variant: 'h6',
          },
          key,
        ),
        children,
      )
    }
    case Elements.paragraph: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            variant: 'textLarge',
            lineHeight: 'large',
            color: 'dark300',
            pb: 1,
          },
          key,
        ),
        children,
      )
    }
    case Elements.list: {
      return React.createElement(
        List,
        propsWithUniqueKey(
          {
            pb: [3, 3, 4],
          },
          key,
        ),
        children,
      )
    }
    case Elements.listItem: {
      return React.createElement(
        ListItem,
        propsWithUniqueKey(props, key),
        children,
      )
    }
    case Elements.oList: {
      return React.createElement(
        OrderedList,
        propsWithUniqueKey(
          {
            pb: [3, 3, 4],
          },
          key,
        ),
        children,
      )
    }
    case Elements.oListItem: {
      return React.createElement(
        OrderedListItem,
        propsWithUniqueKey(props, key),
        children,
      )
    }
    default:
      return null
  }
}

export const footerHtmlSerializer: HTMLSerializer<ReactNode> = function (
  type,
  element,
  content,
  children,
  key,
) {
  let props = {}

  switch (type) {
    case Elements.hyperlink: {
      if (element.data.link_type === 'Document') {
        // Only for internal links add the new onClick that will imperatively route to the appropiate page
        props = Object.assign({
          onClick: onClickHandler(
            linkResolver(element.data),
            linkResolver(element.data),
          ),
          href: linkResolver(element.data),
          variant: 'blue',
        })
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      } else {
        // Default link handling
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {}
        const relAttr = element.data.target ? { rel: 'noopener' } : {}
        props = Object.assign(
          {
            href: element.data.url || linkResolver(element.data),
            variant: 'blue',
          },
          targetAttr,
          relAttr,
        )
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      }
    }
    case Elements.paragraph: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            variant: 'textMedium',
            color: 'gray300',
            lineHeight: 'standard',
            pb: [2, 2, 3],
          },
          key,
        ),
        children,
      )
    }
    default:
      return null
  }
}

// Uses no spacing/line height
export const htmlSerializerMinimal: HTMLSerializer<ReactNode> = function (
  type,
  element,
  content,
  children,
  key,
) {
  let props = {}

  switch (type) {
    case Elements.hyperlink: {
      if (element.data.link_type === 'Document') {
        // Only for internal links add the new onClick that will imperatively route to the appropiate page
        props = Object.assign({
          onClick: onClickHandler(
            linkResolver(element.data),
            linkResolver(element.data),
          ),
          href: linkResolver(element.data),
          size: 'largeBold',
          variant: 'blue',
        })
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      } else {
        // Default link handling
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {}
        const relAttr = element.data.target ? { rel: 'noopener' } : {}
        props = Object.assign(
          {
            href: element.data.url || linkResolver(element.data),
            size: 'largeBold',
            variant: 'blue',
          },
          targetAttr,
          relAttr,
        )
        return React.createElement(
          'a',
          propsWithUniqueKey(props, key),
          children,
        )
      }
    }
    case Elements.heading1: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pt: [2, 2, 3],
            pb: [1],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading2: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pt: [2, 2, 3],
            pb: [1],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading3: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pt: [2, 2, 3],
            pb: [1],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading4: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pt: [2, 2, 3],
            pb: [1],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading5: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            pt: [2, 2, 3],
            pb: [1],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.heading6: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            py: [2, 2, 3],
            fontWeight: 'bold',
          },
          key,
        ),
        children,
      )
    }
    case Elements.paragraph: {
      return React.createElement(
        Text,
        propsWithUniqueKey(
          {
            variant: 'textIntro',
            lineHeight: 'large',
            pb: 0,
          },
          key,
        ),
        children,
      )
    }
    case Elements.list: {
      return React.createElement(
        List,
        propsWithUniqueKey(
          {
            py: [2, 2, 3],
          },
          key,
        ),
        children,
      )
    }
    case Elements.listItem: {
      return React.createElement(
        ListItem,
        propsWithUniqueKey({ noMargin: true }, key),
        children,
      )
    }
    case Elements.oList: {
      return React.createElement(
        OrderedList,
        propsWithUniqueKey(
          {
            py: [2, 2, 3],
          },
          key,
        ),
        children,
      )
    }
    case Elements.oListItem: {
      return React.createElement(
        OrderedListItem,
        propsWithUniqueKey({ noMargin: true }, key),
        children,
      )
    }
    default:
      return null
  }
}

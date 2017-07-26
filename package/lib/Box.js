import React from 'react'
import PropTypes from 'prop-types'
import { toClassName } from './css.js'

const Box = (p, c) => {
  const gutter = c.gutter()

  const cn = {
    width: p.width || 1
  }

  if (gutter) cn['padding'] = gutter
  if (p.offset) cn['offset'] = p.offset
  if (p.order) cn['order'] = p.order

  return <div className={p.className || '' + ' ' + toClassName(cn)}>{p.children}</div>
}

Box.contextTypes = {
  gutter: PropTypes.func
}

export default Box

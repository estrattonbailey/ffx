import React from 'react'
import PropTypes from 'prop-types'
import { toClassName } from './css.js'

class Flex extends React.Component {
  getChildContext () {
    return {
      gutter: () => this.state.gutter
    }
  }

  constructor (p) {
    super(p)

    this.state = {
      gutter: p.gutter || 0
    }
  }

  componentWillReceiveProps (p) {
    this.setState({ gutter: p.gutter || 0 })
  }

  render () {
    const p = this.props

    return (
      <div
        className={
          p.className || '' + ' ' + toClassName({
            margin: this.state.gutter,
            wrap: p.wrap || false
          })
        }
        style={{
          display: 'flex',
          alignItems: p.alignItems || 'flex-start',
          justifyContent: p.justifyContent || 'flex-start'
        }}>
        {p.children}
      </div>
    )
  }
}

Flex.childContextTypes = {
  gutter: PropTypes.func
}

export default Flex

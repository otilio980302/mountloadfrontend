import PropTypes from 'prop-types'
import React from 'react'
import { CCallout } from '@coreui/react'

// import packageJson from '../../package.json'

const DocsCallout = (props) => {
  // const { href, name } = props

  // const plural = name.slice(-1) === 's' ? true : false

  // const _href = `https://coreui.io/react/docs/${packageJson.config.coreui_library_short_version}/${href}`

  return (
    <CCallout color="info" className="bg-white">
      variants, and unique design that matches CoreUI Design System requirements.
      <br />
      <br />
      For more information please visit our official{' '}
        documentation of CoreUI Components Library for React.js

      .
    </CCallout>
  )
}

DocsCallout.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
}

export default React.memo(DocsCallout)

import React, { PropTypes } from 'react'

const Font = ({ src }) => (
  <li>
    {src}
  </li>
)

Font.propTypes = {
  src: PropTypes.string.isRequired
}

export default Font

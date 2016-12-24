import React, { PropTypes } from 'react'

const style = {color: 'blue'}

const Font = ({font}) => (
  <li style={
    {fontFamily: font.family}
  }>
    {font.path}
  </li>
)

Font.propTypes = {
  path: PropTypes.string.isRequired
}

export default Font

import React, { PropTypes } from 'react'
import Font from './Font'

const FontList = ({fonts}) => (
  <ul>
    { fonts.map(font =>
        <Font
          key={font.id}
          font={font}
          {...font}
        />
    )}
  </ul>
)

FontList.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default FontList

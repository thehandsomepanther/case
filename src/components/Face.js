import React, { PropTypes } from 'react'

const card = {
  display: 'inline-block',
  width: '100%',
  marginBottom: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
  borderRadius: '4px',
  padding: '10px',
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue"'
}

const Face = ({family, face}) => (
  <div style={card}>
    <h3>{family}</h3>
    <div style={
      {
        fontFamily: family,
        fontSize: '2rem',
        whiteSpace: 'nowrap',
        overflow: 'scroll'
      }
    }>
      The quick brown fox jumped over the lazy dog.
    </div>
  </div>
)

export default Face

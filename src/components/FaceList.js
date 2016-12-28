import React, { PropTypes } from 'react'
import Face from './Face'

const FaceList = ({library}) => (
  <div>
    {
      Object.keys(library.faces).map((key) => {
        return <Face
          key={key}
          family={key}
          face={library.faces[key]}
        />
      })
    }
  </div>
)

export default FaceList

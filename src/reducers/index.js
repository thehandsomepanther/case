import { createStore } from 'redux'

const face = (state, action) => {
  switch (action.type) {
    case 'ADD_FACE':
      return {
        id: action.id,
        path: action.path
      }
      break
    default:
      return state
  }
}

const faces = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FACE':
      return [
        ...state,
        font(undefined, action)
      ]
    default:
      return state
  }
}

export default faces

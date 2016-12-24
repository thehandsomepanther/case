import { createStore } from 'redux'

const font = (state, action) => {
  switch (action.type) {
    case 'ADD_FONT':
      return {
        id: action.id,
        path: action.path
      }
    default:
      return state
  }
}

const fonts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FONT':
      return [
        ...state,
        font(undefined, action)
      ]
    default:
      return state
  }
}

export default fonts

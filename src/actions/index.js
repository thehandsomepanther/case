let nextFaceId = 0

export const addFace = () => ({
  type: 'ADD_FACE',
  id: nextFaceId++,
})

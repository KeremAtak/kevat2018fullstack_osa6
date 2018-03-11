const initialState = ''

const asObject = (filter) => {
  return {
    store: filter
  }
}

const filterReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'UPDATEFILTER':
      return action.filter
    default:
      return store
  }
}

export const filterUpdate = (filter) => {
  console.log(filter)
  return {
    type: 'UPDATEFILTER',
    filter
  }
}

export default filterReducer
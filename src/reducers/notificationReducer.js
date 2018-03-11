const initialState = ''

const asObject = (notification) => {
  return {
    store: notification
  }
}

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'CREATENOTIFICATION':
      return action.notification
    default:
      return store
  }
}


export const notificationCreate = (notification) => {
  return {
    type: 'CREATENOTIFICATION',
    notification
  }
}


export default notificationReducer
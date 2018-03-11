import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = createStore(reducer)
store.subscribe(() => 
  store.getState()
)

export default store
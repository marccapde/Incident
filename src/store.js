import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { myPlansReducer } from './reducers'

const rootReducer = combineReducers({
  myPlans: myPlansReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export { store }
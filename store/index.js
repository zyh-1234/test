import { createStore, applyMiddleware } from 'redux'
// import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from '../reducer'

const middlewares = [thunk]

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composeEnhancers = compose

const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
// const defaultState = { counter: 2 }
// function createMyStore(initialState = defaultState) {
//   const MyStore = createStore(
//     reducers,
//     // composeEnhancers(applyMiddleware(...middlewares)),
//     initialState,
//   )
//   return MyStore
// }

// export default createMyStore

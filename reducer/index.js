import { combineReducers } from '@reduxjs/toolkit'
import reSelectReducer from './reselect'
import loginPageReducer from './login'
import productReducer from './product'

import orderReducer from './order'
import userPageReducer from './user'
import navDataReducer from './nav'
import globalConfigReducer from './globalConfig'

export default combineReducers({
  reSelectReducer,
  orderReducer,
  loginPageReducer,
  userPageReducer,
  productReducer,
  navDataReducer,
  globalConfigReducer,
})

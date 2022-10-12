import { getOrderList, updateOrderList } from 'core/service/order'
import * as types from '../mutation-types'

export const queryOrderList = (params) => {
  return async (dispatch) => {
    const res = await getOrderList(params)
    dispatch({
      type: types.QUERY_ORDER_LIST,
      payload: res,
    })
  }
}

export const asyncUpdateOrderList = (params) => {
  return async (dispatch) => {
    const res = await updateOrderList(params)
    dispatch({
      type: types.UPDATE_ORDER_LIST,
      payload: res,
    })
  }
}

export const addOrder = (params) => {
  return {
    type: types.ADD_ORDER,
    payload: params,
  }
}

export const removeOrder = (params) => {
  return {
    type: types.REMOVE_ORDER,
    payload: params,
  }
}

export const editOrder = (params) => {
  return {
    type: types.EDIT_ORDER,
    payload: params,
  }
}

export const editOrderStamp = (params) => {
  return {
    type: types.EDIT_ORDER_STAMP,
    payload: params,
  }
}

export const editOrderNote = (params) => {
  return {
    type: types.EDIT_ORDER_NOTE,
    payload: params,
  }
}

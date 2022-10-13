import { getGoodsList, updateGoodsList } from 'core/service/goods'
import * as types from '../mutation-types'

export const queryGoodsList = (params) => {
  return async (dispatch) => {
    const res = await getGoodsList(params)
    dispatch({
      type: types.QUERY_GOODS_LIST,
      payload: res,
    })
  }
}

export const asyncUpdateGoodsList = (params) => {
  return async (dispatch) => {
    const res = await updateGoodsList(params)
    dispatch({
      type: types.UPDATE_GOODS_LIST,
      payload: res,
    })
  }
}

export const addGoods = (params) => {
  return {
    type: types.ADD_GOODS,
    payload: params,
  }
}

export const removeGoods = (params) => {
  return {
    type: types.REMOVE_GOODS,
    payload: params,
  }
}

export const editGoods = (params) => {
  return {
    type: types.EDIT_GOODS,
    payload: params,
  }
}

export const editGoodsStamp = (params) => {
  return {
    type: types.EDIT_GOODS_STAMP,
    payload: params,
  }
}

export const editGoodsNote = (params) => {
  return {
    type: types.EDIT_GOODS_NOTE,
    payload: params,
  }
}

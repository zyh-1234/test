import { getHomeConfig } from 'core/service/home'
import * as types from '../mutation-types'

export function showSideBar(params) {
  return {
    type: types.SHOW_SIDE_BAR,
    payload: params,
  }
}

export function queryGlobalConfig() {
  return async (dispatch) => {
    const res = await getHomeConfig()

    dispatch({
      type: types.QUERY_GLOBAL_CONFIG,
      payload: res,
    })
  }
}

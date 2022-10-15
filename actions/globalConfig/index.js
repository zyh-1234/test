import { getHomeConfig } from 'core/service/home'
import cache from '../../utils/cache'
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
    const { cpfenlei_lx, cpfenlei_st, cpfenlei_sx } = res
    cache.setCache('allStone', cpfenlei_st)
    cache.setCache('allCategory', cpfenlei_lx)
    cache.setCache('allColor', cpfenlei_sx)
    dispatch({
      type: types.QUERY_GLOBAL_CONFIG,
      payload: res,
    })
  }
}

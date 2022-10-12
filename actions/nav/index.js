import { getNavData } from 'core/service/nav'
import * as types from '../mutation-types'

export function asyncQueryNavData() {
  return async (dispatch) => {
    const res = await getNavData()
    dispatch({
      type: types.ASYNC_QUERY_NAV_DATA,
      payload: res,
    })
  }
}

import * as types from '../mutation-types'

export function updateUserInfo(params) {
  return {
    type: types.UPDATE_USERINFO,
    payload: params,
  }
}

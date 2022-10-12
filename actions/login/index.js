import * as types from '../mutation-types'

export function queryLoginPageContent(params) {
  return {
    type: types.QUERY_LOGIN_PAGE_CONTENT,
    payload: params,
  }
}

export function updateLoginStatus(params) {
  return {
    type: types.UPDATE_LOGIN_STATUS,
    payload: params,
  }
}

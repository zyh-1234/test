import { localRequest } from '../index'

const LoginAPI = {
  AccountLogin: '/login',
  UserInfo: '/users/',
  UserMenus: '/role/',
}

export function accountLoginRequest(account) {
  return localRequest.post({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}

export function getUserById(id) {
  return localRequest.get({
    url: LoginAPI.UserInfo + id,
  })
}

export function getUserMenus(id) {
  return localRequest.get({
    url: LoginAPI.UserMenus + id + '/menu',
  })
}

import { localRequest } from '../index'

const NavAPI = {
  NavData: '/nav',
}

export function getNavData() {
  return localRequest.get({
    url: NavAPI.NavData,
  })
}

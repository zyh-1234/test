// import { localRequest } from '../index'
import { myRequest } from '../index'

const NavAPI = {
  // NavData: '/nav',
  NavData: '/cpmenu',
}

export function getNavData(id) {
  return myRequest.get({
    url: `${NavAPI.NavData}/${id}`,
  })
}

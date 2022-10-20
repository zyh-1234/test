import { getLxid } from 'utils/getLxid'
import { myRequest } from '..'

const productAPI = {
  Cplist: '/cplist',
}

//通用产品数据
export function getProductCategory(id) {
  const code = getLxid(id)
  return myRequest.get({
    url: `${productAPI.Cplist}/${id}?lx_id=${code}&page=1`,
  })
}

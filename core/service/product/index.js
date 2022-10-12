import { localRequest, myRequest } from '..'

const productAPI = {
  ProductCategory: '/product/category',
  Cplist: '/cplist',
}

//通用产品数据
export function getProductCategory(id) {
  return localRequest.get({
    url: `${productAPI.ProductCategory}/${id}`,
  })
}

//通用产品数据
export function getProductCategory2(id) {
  return myRequest.get({
    url: `${productAPI.Cplist}/${id}`,
  })
}

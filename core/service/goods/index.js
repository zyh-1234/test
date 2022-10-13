import { localRequest } from '../index'

const GoodsAPI = {
  UpdateGoods: '/goods',
  GetGoods: '/goods',
}

export function updateGoodsList(params) {
  return localRequest.post({
    url: GoodsAPI.UpdateGoods,
    data: params,
  })
}

export function getGoodsList(params) {
  return localRequest.get({
    url: GoodsAPI.GetGoods,
    data: params,
  })
}

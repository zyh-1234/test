import { localRequest } from '../index'

const OrderAPI = {
  UpdateOrder: '/order',
  GetOrder: '/order',
}

export function updateOrderList(params) {
  return localRequest.post({
    url: OrderAPI.UpdateOrder,
    data: params,
  })
}

export function getOrderList(params) {
  return localRequest.get({
    url: OrderAPI.GetOrder,
    data: params,
  })
}

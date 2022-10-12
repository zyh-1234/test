import * as types from '../../actions/mutation-types'
import produce from 'immer'

const initialState = {
  orderList: [],
  orderDesText: {
    title: 'SHOPPING BAG',
    backTo: ' Continue Shopping',
    toUrl: '/product/detail/10002',
    des: '你的购物袋空空如也~',
  },
  description: [
    {
      title:
        'Once you place the order, please be patient and wait for our colleague to reach out you',
    },
    {
      list: [
        'New: I’m new here and I still have some questions about the products and other things',
        'Prepare: I’m not intending to but these products right now but I need them to be prepared and I will but them in the future.',
        'Urgent: I need to buy these goods right now.',
      ],
    },
  ],
  contentText: {
    title: 'Summary',
    price: 'Price',
    discount: 'Discount',
    discountDes: 'Products purchased from website enjoys a discount of 40%.',
    total: 'Total',
    totalDes:
      'Final price might change according to the other reasons, our colleagues will contact you soon as you send us the order.',
    orderStatus: ['New', 'Prepare', 'Urgent'],
    sendButton: 'SEND US THE ORDER',
    downloadButton: '【下载图标】Download the images',
  },
}

const mutations = {
  [types.QUERY_ORDER_LIST](state, action) {
    return produce(state, (draftState) => {
      draftState.orderList = [...action.payload]
    })
  },
  [types.UPDATE_ORDER_LIST](state, action) {
    return produce(state, (draftState) => {
      draftState.orderList = [...action.payload]
    })
  },
  [types.ADD_ORDER](state, action) {
    return produce(state, (draftState) => {
      draftState.orderList.unshift(action.payload)
    })
  },
  [types.REMOVE_ORDER](state, action) {
    return produce(state, (draftState) => {
      draftState.orderList.splice(action.payload, 1)
    })
  },
  [types.EDIT_ORDER](state, action) {
    const {
      payload: { index, value },
    } = action
    return produce(state, (draftState) => {
      draftState.orderList[index].qty = value
    })
  },
  [types.EDIT_ORDER_STAMP](state, action) {
    const {
      payload: { id, value = [] },
    } = action
    return produce(state, (draftState) => {
      draftState.orderList.find((item) => item.id === id).stamp = value
    })
  },
  [types.EDIT_ORDER_NOTE](state, action) {
    const {
      payload: { id, value },
    } = action
    return produce(state, (draftState) => {
      draftState.orderList.find((item) => item.id === id).note = value
    })
  },
}

export default function orderReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

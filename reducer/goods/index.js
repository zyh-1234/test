import * as types from '../../actions/mutation-types'
import produce from 'immer'

const initialState = {
  goodsList: [],
  goodsDesText: {
    title: 'SHOPPING BAG',
    backTo: ' Continue Shopping',
    toUrl: '/product/detail/10002',
    empty: '你的购物袋空空如也~',
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
  [types.QUERY_GOODS_LIST](state, action) {
    return produce(state, (draftState) => {
      draftState.goodsList = [...action.payload]
    })
  },
  [types.UPDATE_GOODS_LIST](state, action) {
    return produce(state, (draftState) => {
      draftState.goodsList = [...action.payload]
    })
  },
  [types.ADD_GOODS](state, action) {
    return produce(state, (draftState) => {
      draftState.goodsList.unshift(action.payload)
    })
  },
  [types.REMOVE_GOODS](state, action) {
    return produce(state, (draftState) => {
      draftState.goodsList.splice(action.payload, 1)
    })
  },
  [types.EDIT_GOODS](state, action) {
    const {
      payload: { index, value },
    } = action
    return produce(state, (draftState) => {
      draftState.goodsList[index].qty = value
    })
  },
  [types.EDIT_GOODS_STAMP](state, action) {
    const {
      payload: { id, value = [] },
    } = action
    return produce(state, (draftState) => {
      draftState.goodsList.find((item) => item.id === id).stamp = value
    })
  },
  [types.EDIT_GOODS_NOTE](state, action) {
    const {
      payload: { id, value },
    } = action
    return produce(state, (draftState) => {
      draftState.goodsList.find((item) => item.id === id).note = value
    })
  },
}

export default function goodsReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

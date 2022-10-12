// import { produce } from 'immer'
import * as types from '../../actions/mutation-types'

const initialState = {
  loginPageContent: {
    title: '我的佛隆',
    des: '登录或注册',

    pageLeftInfo: [
      {
        title: '健康无害',
        icon: '../../img/健康.png',
        des: '我们的产品不含有害物质，不含镍，合乎环保健康标准，过敏体质人群可放心佩戴。',
      },

      {
        title: '经久耐戴',
        icon: '../../img/login_page_1.png',
        des: '我们拥有独家的核心技术，产品几乎不会出现氧化褪色的现象，即便是戴了再放下一段时间。',
      },

      {
        title: '商务合作',
        icon: '../../img/商务.png',
        des: '我们希望可以和任何一位客户展开长期合作，任何相关意向请联系我们。',
      },

      {
        title: '镌刻字印',
        icon: '../../img/镌刻.png',
        des: '针对有自家字印或无字印的需求，我们都可以满足，注册登录后，可以备注你的产品。',
      },
      {
        title: '订金政策',
        icon: '../../img/定金.png',
        des: '下达定制的订单，我们需要事先收取 30%的订金后方可进行生产。',
      },
    ],
  },
  loginStatus: false,
}

const mutations = {
  [types.QUERY_LOGIN_PAGE_CONTENT](state) {
    return { ...state }
  },
  [types.UPDATE_LOGIN_STATUS](state, action) {
    return {
      ...state,
      loginStatus: action.payload,
    }
  },
}

export default function loginPageReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

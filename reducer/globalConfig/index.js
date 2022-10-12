import * as types from '../../actions/mutation-types'

const initialState = {
  globalConfig: {},
  isSideBar: true,
  sideBarStatus: 'SHOW_SIDE_BAR',
}

const mutations = {
  [types.QUERY_GLOBAL_CONFIG](state, action) {
    return {
      ...state,
      globalConfig: action.payload,
    }
  },
  [types.SHOW_SIDE_BAR](state) {
    return { ...state }
  },
  [types.SHOW_SIDE_BAR](state, action) {
    return { ...state, sideBarStatus: action.payload }
  },
}

export default function globalConfigReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

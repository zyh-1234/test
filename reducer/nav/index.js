import * as types from '../../actions/mutation-types'

const initialState = {
  navData: [],
}

const mutations = {
  [types.ASYNC_QUERY_NAV_DATA](state, action) {
    return { ...state, navData: [...action.payload] }
  },
}

export default function navDataReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

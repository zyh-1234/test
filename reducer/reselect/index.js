import * as types from '../../actions/mutation-types'
import produce from 'immer'
const initialState = {
  reSelectList: [],
  filterStatus: 'FILTER_ALL_DATA',
}

const mutations = {
  [types.FILTER_ALL_DATA](state) {
    return { ...state }
  },
  [types.UPDATE_FILTER_STATUS](state, action) {
    return {
      ...state,
      filterStatus: action.payload,
    }
  },
  [types.ASYNC_QUERY_RESELECT_LIST](state, action) {
    return produce(state, (draftState) => {
      draftState.reSelectList = action.payload
    })
  },
}

export default function reSelectReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}

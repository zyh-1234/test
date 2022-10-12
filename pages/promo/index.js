import { asyncQueryReSelectList, filterData, updateFilterStatus } from 'actions/reselect'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createSelector } from 'reselect'

const mapStatus = {
  0: 'FILTER_ALL_DATA',
  1: 'FILTER_SUCCESS_STATUS',
  2: 'FILTER_FAIL_STATUS',
}

const getReSelectList = (state) => state.reSelectReducer.reSelectList
const getFilterStatus = (state) => state.reSelectReducer.filterStatus

const createReselectList = createSelector([getReSelectList, getFilterStatus], (list, status) =>
  filterData(list, status),
)

@connect(
  (state) => ({
    filterList: createReselectList(state),
  }),
  (dispatch) =>
    bindActionCreators({ asyncQueryReSelectList, filterData, updateFilterStatus }, dispatch),
)
class Promo extends Component {
  handleClick = (status) => {
    const { updateFilterStatus } = this.props
    updateFilterStatus(mapStatus[status])
  }
  componentDidMount() {
    const { asyncQueryReSelectList } = this.props
    asyncQueryReSelectList()
  }
  render() {
    const { filterList } = this.props
    return (
      <section>
        <ul>
          {filterList &&
            filterList.map((item, index) => (
              <li key={index}>
                {item.name}--{`${item.status}`}
              </li>
            ))}
        </ul>
        <button type="default" onClick={() => this.handleClick(0)}>
          all
        </button>
        <button type="default" onClick={() => this.handleClick(1)}>
          true
        </button>
        <button type="default" onClick={() => this.handleClick(2)}>
          false
        </button>
        <h1>User</h1>
      </section>
    )
  }
}

// const mapStateToProps = (state) => {
//   return state.homeReducer
// }

// const mapDispathToProps = (dispatch) => {
//   return bindActionCreators({ updateName }, dispatch)
// }

// const mapDispathToProps = (dispatch) => {
//   return { updateName: (params) => dispatch(updateName(params)) }
// }

// export default connect(mapStateToProps, mapDispathToProps)(User)

export default Promo

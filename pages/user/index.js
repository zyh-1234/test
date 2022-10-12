import Nav from '@/Common/Nav'
import MineDetail from '@/p_user/MineDetail'
import MineOrder from '@/p_user/MineOrder'
import Overview from '@/p_user/Overview'
import OrderDetail from '@/p_user/OrderDetail'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateUserInfo } from 'actions/user'

import s from './User.module.css'

const TYPES = {
  OVERVIEW: 'overview',
  MINEDETAIL: 'minedetail',
  MINEORDER: 'mineorder',
}
@connect(
  (state) => ({
    userPageBaseInfo: state.userPageReducer.userPageBaseInfo,
    userInfo: state.userPageReducer.userInfo,
    loginStatus: state.loginPageReducer.loginStatus,
  }),
  (dispatch) => bindActionCreators({ updateUserInfo }, dispatch),
)
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentType: TYPES.OVERVIEW,
      isEdit: true,
    }
  }
  componentDidMount() {
    const { loginStatus } = this.props
    console.log(loginStatus)
  }
  handleClick = (type) => {
    this.setState({ contentType: type })
  }

  handleClickEdit = (type) => {
    console.log(type)
    if (type === 'edit') {
      this.setState({ isEdit: false })
    }
    this.setState({ contentType: TYPES.MINEDETAIL })
  }

  handleSetIsEdit = () => {
    this.setState({ isEdit: true })
  }

  handleSubmit = (type, value) => {
    const { updateUserInfo } = this.props
    console.log(type, value)
    updateUserInfo(value)
  }

  renderContent = () => {
    const { contentType } = this.state
    const {
      userPageBaseInfo: { overview, editDetailContentText, mineOrderContentText },
      userInfo,
    } = this.props
    switch (contentType) {
      case TYPES.OVERVIEW:
        return <Overview data={overview} userInfo={userInfo} onClickEdit={this.handleClickEdit} />
      case TYPES.MINEDETAIL:
        return (
          <MineDetail
            data={editDetailContentText}
            userInfo={userInfo}
            isEdit={this.state.isEdit}
            setIsEdit={this.handleSetIsEdit}
            onSubmit={this.handleSubmit}
          />
        )
      case TYPES.MINEORDER:
        return <MineOrder data={mineOrderContentText} />
      default:
        break
    }
  }

  render() {
    const {
      userPageBaseInfo: { navbar, orderDetailContentText },
    } = this.props
    return (
      <>
        <Nav />
        <div className={s.user_wrap}>
          <div className={s.userinfo}>
            <div className={s.navbar_wrap}>
              <ul className={s.navbar}>
                {navbar.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className={item.type === this.state.contentType ? s.current : ''}
                    onClick={() => this.handleClick(item.type)}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className={s.content_wrap}>{this.renderContent()}</div>
            </div>
            {this.state.contentType === TYPES.MINEORDER ? (
              <OrderDetail data={orderDetailContentText} />
            ) : null}
          </div>
        </div>
      </>
    )
  }
}

export default User

import Nav from '@/Common/Nav'
import LoginForm from '@/p_login/LoginForm'
import LoginLeftInfo from '@/p_login/LoginLeftInfo'
import RegisterForm from '@/p_login/RegisterForm'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateLoginStatus } from 'actions/login'
import { updateUserInfo } from 'actions/user'

import s from './login.module.css'
import { withRouter } from 'next/router'

@connect(
  (state) => ({
    loginPageContent: state.loginPageReducer.loginPageContent,
    loginStatus: state.loginPageReducer.loginStatus,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        updateLoginStatus,
        updateUserInfo,
      },
      dispatch,
    ),
)
class Login extends Component {
  constructor(props) {
    super(props)
  }

  onLogin = (values) => {
    const { updateUserInfo, updateLoginStatus, router } = this.props
    console.log('login', values)
    // 登录逻辑
    // 1.校验
    const userInfo = {
      fristname: 'Li',
      lastname: 'AnSenn',
      nickname: '昵称',
      username: 'AnSenn Li',
      userphone: '+86 18888888888',
      useremail: 'ansenn@fallon-fj.com',
      loginMode: '',
      password: '',
      prefix: '',
      avatarImg: 'https://joeschmoe.io/api/v1/random',
      wx: '微信号',
      whatsapp: '',
      otheremail: '其他邮箱',
      othercontact: '其他联系方式',
      suggest: '意见建议',
      order: { orderID: '', orderCode: '', orderStatus: 0, createAt: 1664432556403, list: [] },
      historyOrder: [
        {
          orderID: '102',
          orderCode: '2022092918LI216',
          orderStatus: 0,
          createAt: 1664432556403,
          list: [],
        },
        {
          orderID: '103',
          orderCode: '2022092904LI16',
          orderStatus: 1,
          createAt: 1664432556403,
          list: [],
        },
        {
          orderID: '104',
          orderCode: '2022092926LI406',
          orderStatus: 2,
          createAt: 1664432556403,
          list: [],
        },
      ],
      contactUs: {
        name: 'Lesley',
        email: 'lesley@fallon.com',
        phone: '+86 18866866888',
        wx: 'lesleyfallon',
        otherQA: 'ansenn@fallon-fj.com',
      },
    }
    // 2.保存
    updateUserInfo({ ...userInfo, ...values })
    // 3.修改登录状态
    updateLoginStatus(true)
    // 4.修改国际化
    // 5.跳转订单页/首页
    router.push('/shopping-bag')
  }

  onRegister = (values) => {
    console.log('register', values)
  }

  render() {
    const { loginPageContent } = this.props
    return (
      <>
        <Nav />
        <div className={s.login_wrap}>
          <div className={s.login_left}>
            <LoginLeftInfo loginPageContent={loginPageContent} />
          </div>
          <div className={s.login_right}>
            <LoginForm onLogin={this.onLogin} />
            <RegisterForm onRegister={this.onRegister} />
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Login)

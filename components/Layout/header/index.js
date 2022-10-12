import { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import HeaderLanguageBar from './cpn/HeaderLanguageBar'
import HeaderLoginBar from './cpn/HeaderLoginBar'
import HeaderNavBar from './cpn/HeaderNavBar'
import HeaderLogo from './cpn/HeaderLogo'
import HeaderSearchBar from './cpn/HeaderSearchBar'
import s from './Header.module.css'
import HeaderUserBar from './cpn/HeaderUserBar'

@connect((state) => ({
  loginStatus: state.loginPageReducer.loginStatus,
  userInfo: state.userPageReducer.userInfo,
}))
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const mockData = {
      campaignTitle: '￥4,000以上的订购均可享受15％的折扣 ➤',
      language: ['中文', 'English', 'Русский', 'Español'],
      searchText: 'SEARCH',
      text: '欢迎您',
      loginBarContent: { title: '登录/注册', and: ' 后，查看价格以及下达订单。' },
      menus: [
        {
          title: '关于我们',
          href: '/about-us',
          url: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.37676 3.01382C5.24167 2.98055 5.09324 3.00683 4.97439 3.09827C4.89057 3.16275 4.8343 3.24976 4.80753 3.34426C4.77346 3.38554 4.74264 3.43002 4.71556 3.47741L1.06692 9.8635C1.04466 9.9007 1.02801 9.94018 1.01689 9.98078C1.00026 10.0412 0.996126 10.1033 1.00354 10.1637C1.01364 10.2468 1.0457 10.3276 1.09916 10.3964C1.11824 10.4211 1.13995 10.4441 1.16414 10.465L9.37062 17.7607C9.72956 18.0798 10.2705 18.0798 10.6294 17.7607L18.8348 10.4659C18.8655 10.4396 18.8922 10.4099 18.9147 10.3777C18.9289 10.3574 18.9413 10.3362 18.952 10.3143C18.9827 10.2515 19 10.1809 19 10.1063C19 10.0181 18.9759 9.93547 18.9338 9.86473L15.2845 3.47741C15.2574 3.42999 15.2266 3.38549 15.1925 3.34419C15.1657 3.24972 15.1094 3.16274 15.0256 3.09827C14.9068 3.00684 14.7584 2.98055 14.6233 3.01382C14.5705 3.0047 14.5166 3 14.462 3H5.5381C5.48348 3 5.42954 3.0047 5.37676 3.01382ZM5.32151 4.3266L2.27728 9.65482C2.32264 9.64037 2.37097 9.63258 2.42113 9.63258H9.45685C9.38023 9.57884 9.30998 9.5124 9.24911 9.43326L5.32151 4.3266ZM10.5432 9.63258H17.7101L14.6785 4.32658L10.7509 9.43326C10.69 9.5124 10.6198 9.57884 10.5432 9.63258ZM13.7749 3.94751L10 8.85556L6.22516 3.94751L13.7749 3.94751ZM10 17.0525L17.2804 10.5801H2.71961L10 17.0525Z' fill='white'/%3E%3C/svg%3E",
        },
        {
          title: '公司产品',
          href: '/product/category/1',
          url: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.52192 4.88651C3.37972 4.96724 3.28134 5.10592 3.25338 5.26504L3.00808 6.66082C2.98277 6.80487 3.01746 6.95288 3.10435 7.0715C3.19123 7.19011 3.32299 7.26935 3.46994 7.29137L5.76323 7.63486C3.73311 9.49227 3.19757 12.5445 4.64297 15.0065C6.32348 17.8691 10.0454 18.8499 12.9561 17.1972C15.8669 15.5445 16.8642 11.8842 15.1837 9.02161C13.7195 6.52766 10.7059 5.46207 8.02914 6.32194L8.85978 4.23106C8.91387 4.09489 8.90997 3.94305 8.84896 3.80975C8.78795 3.67644 8.67496 3.57289 8.53545 3.52243L7.18367 3.03345C7.02957 2.97771 6.85826 2.99216 6.71607 3.07289L3.52192 4.88651ZM4.19453 6.29918L4.29957 5.70147L7.0449 4.14269L7.62376 4.35208L6.70109 6.67462L4.19453 6.29918ZM14.2254 9.5657C15.6004 11.9078 14.7844 14.9026 12.4029 16.2548C10.0214 17.607 6.97618 16.8045 5.60121 14.4625C4.22625 12.1204 5.04221 9.12556 7.42372 7.77336C9.80523 6.42116 12.8504 7.22361 14.2254 9.5657Z' fill='white'/%3E%3C/svg%3E",
        },
        {
          title: '联系我们',
          href: '/contact-us',
          url: "data:image/svg+xml,%3Csvg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 17.0769C9.80391 17.0769 12.0769 14.8039 12.0769 12C12.0769 9.19609 9.80391 6.92308 7 6.92308C4.19609 6.92308 1.92308 9.19609 1.92308 12C1.92308 14.8039 4.19609 17.0769 7 17.0769ZM7 18C10.3137 18 13 15.3137 13 12C13 8.68629 10.3137 6 7 6C3.68629 6 1 8.68629 1 12C1 15.3137 3.68629 18 7 18Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 14.0769C14.8039 14.0769 17.0769 11.8039 17.0769 9C17.0769 6.19609 14.8039 3.92308 12 3.92308C9.19609 3.92308 6.92308 6.19609 6.92308 9C6.92308 11.8039 9.19609 14.0769 12 14.0769ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z' fill='white'/%3E%3C/svg%3E",
        },
      ],
    }
    const { campaignTitle, language, loginBarContent, menus, searchText, text } = mockData
    const { loginStatus, userInfo } = this.props

    return (
      <header className={s.header}>
        {/* 促销/折扣 */}
        <div className={s.top_campaign_wrap}>
          <Link href="/promo">
            <a>
              <p className={s.top_campaign_wrap_title}>{campaignTitle}</p>
            </a>
          </Link>
        </div>
        {/* 语言栏&登录 */}
        <div className={s.header_head_wrap}>
          <div className={s.head}>
            <HeaderLanguageBar language={language} />
            {loginStatus ? (
              <HeaderUserBar text={text} userInfo={userInfo} />
            ) : (
              <HeaderLoginBar data={loginBarContent} />
            )}
          </div>
        </div>
        {/* 关于我们&搜索 */}
        <div className={s.header_content_wrap}>
          <div className={s.header_content}>
            <HeaderNavBar menus={menus} />
            <HeaderLogo />
            <HeaderSearchBar searchText={searchText} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header

import Footer from './footer'
import Header from './header'
import Head from 'next/head'
import s from './Layout.module.css'
import Sidebar from '@/Common/Sidebar'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import config from '../../globalConfig/globalConfig'
import { Component } from 'react'
import { connect } from 'react-redux'
import { queryGlobalConfig } from 'actions/globalConfig'
import { bindActionCreators } from 'redux'

import cache from '../../utils/cache'

@connect(
  (state) => ({ globalConfig: state.globalConfigReducer.globalConfig }),
  (dispatch) => bindActionCreators({ queryGlobalConfig }, dispatch),
)
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: 30,
        width: 90,
        lineHeight: '30px',
        borderRadius: 4,
        backgroundColor: config.get('theme').black.primary,
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
      },
    }
  }

  componentDidMount() {
    // queryGlobalConfig()
    const { globalConfig } = this.props

    const { cpfenlei_lx, cpfenlei_st, cpfenlei_sx } = globalConfig
    cache.setCache('allStone', cpfenlei_st)
    cache.setCache('allCategory', cpfenlei_lx)
    cache.setCache('allColor', cpfenlei_sx)
  }

  renderBackTop = () => (
    <div style={this.state.style}>
      <span className={s.back_top}>
        <VerticalAlignTopOutlined />
      </span>
      <span>回到顶部</span>
    </div>
  )

  render() {
    const { children, globalConfig } = this.props
    const { address, callemail, calluser, config } = globalConfig

    return (
      <main className={s.container}>
        <Head>
          <title>广州市佛隆首饰有限公司</title>
          <meta name="description" content="广州市佛隆首饰有限公司" />
          <link rel="icon" href="https://www.fallon-fj.com/fj.png" />
        </Head>
        <Header className={s.header} />
        <section className={s.section}>{children}</section>
        <BackTop style={{ left: 40 }}>{this.renderBackTop()}</BackTop>
        <Sidebar />
        <Footer
          className={s.footer}
          address={address}
          callemail={callemail}
          calluser={calluser}
          config={config}
        />
      </main>
    )
  }
}

export default Layout

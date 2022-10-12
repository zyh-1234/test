import { Component } from 'react'
import Footer from './footer'
import Header from './header'
import Head from 'next/head'
import Content from './content'

import { connect } from 'react-redux'
import { queryGlobalConfig } from 'actions/globalConfig'
import { bindActionCreators } from 'redux'

import cache from '../../utils/cache'

import s from './Layout.module.css'
@connect(
  (state) => ({ globalConfig: state.globalConfigReducer.globalConfig }),
  (dispatch) => bindActionCreators({ queryGlobalConfig }, dispatch),
)
class Layout extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // queryGlobalConfig()
    const { globalConfig } = this.props

    const { cpfenlei_lx, cpfenlei_st, cpfenlei_sx } = globalConfig
    cache.setCache('allStone', cpfenlei_st)
    cache.setCache('allCategory', cpfenlei_lx)
    cache.setCache('allColor', cpfenlei_sx)
  }

  render() {
    const { globalConfig } = this.props
    const { address, callemail, calluser, config } = globalConfig

    return (
      <main className={s.container}>
        <Head>
          <title>广州市佛隆首饰有限公司</title>
          <meta name="description" content="广州市佛隆首饰有限公司" />
          <link rel="icon" href="https://www.fallon-fj.com/fj.png" />
        </Head>
        <Header className={s.header} />

        <Content>{this.props.children}</Content>

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

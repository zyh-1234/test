import Layout from '@/Layout/Layout'
import App from 'next/app'
import WithRedux from '@/HOC/withRedux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { init as initColor } from '../globalConfig/theme'
initColor()

function MyApp({ Component, pageProps, ReduxStore }) {
  return (
    <Provider store={ReduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  // const store = appContext.ReduxStore
  // store.subscribe(() => {
  //   console.log('store change')
  // })
  // store.dispatch({ type: 'add' })

  return { ...appProps }
}

export default WithRedux(MyApp)

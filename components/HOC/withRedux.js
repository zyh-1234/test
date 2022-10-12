import { Component } from 'react'

import store from '../../store'

const isServer = typeof window === 'undefined'
const _REDUX_STORE_ = '_REDUX_STORE_'

// client and server use a store
function getOrCreateStore() {
  if (isServer) {
    return store
  }
  if (!window[_REDUX_STORE_]) {
    window[_REDUX_STORE_] = store
  }
  return window[_REDUX_STORE_]
}

function WithRedux(Comp) {
  return class HOC extends Component {
    constructor(props) {
      super(props)

      this.store = getOrCreateStore()
    }

    static async getInitialProps(ctx) {
      const MyStore = getOrCreateStore()
      ctx.ReduxStore = MyStore
      let appProps = {}
      if (typeof Comp.getInitialProps === 'function') {
        appProps = await Comp.getInitialProps(ctx)
      }

      return {
        ...appProps,
        initialState: MyStore.getState(),
      }
    }
    render() {
      return <Comp {...this.props} ReduxStore={this.store} />
    }
  }
}

export default WithRedux

import axios from 'axios'
// import { message } from 'antd'

class MyRequest {
  constructor(options) {
    this.config = options
    this.interceptorHooks = options.interceptorHooks
    this.showLoading = options.showLoading
    this.loadingkey = 'updatable'
    this.instance = axios.create(options)
    this.setupInterceptor()
  }

  setupInterceptor() {
    this.instance.interceptors.request.use(
      this.interceptorHooks.requestInterceptor,
      this.interceptorHooks.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch,
    )

    this.instance.interceptors.request.use((config) => {
      // if (!this.showLoading) {
      //   message.loading({
      //     content: 'Loading...',
      //     key: this.loadingkey,
      //   })
      // }
      return config
    })

    this.instance.interceptors.response.use(
      (res) => {
        // message.success({
        //   content: 'Loaded',
        //   key: this.loadingkey,
        // })
        return res
      },
      (err) => {
        // message.success({
        //   content: 'Loaded',
        //   key: this.loadingkey,
        // })
        return err
      },
    )
  }

  request(config) {
    if (!config.showLoading) {
      this.showLoading = false
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
          this.showLoading = true
        })
        .catch((err) => {
          reject(err)
          this.showLoading = true
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }

  options(config) {
    return this.request({ ...config, method: 'OPTIONS' })
  }
}

export default MyRequest

import axios from 'axios'
// import { Alert, Spin } from 'antd'

class MyRequest {
  constructor(options) {
    this.config = options
    this.interceptorHooks = options.interceptorHooks
    this.showLoading = options.showLoading
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
      if (this.showLoading) {
        // this.loading = () => {
        // return (
        //   <Spin tip="Loading...">
        //     <Alert
        //       message="Alert message title"
        //       description="Further details about the context of this alert."
        //       type="info"
        //     />
        //   </Spin>
        // )
        // }
      }
      return config
    })

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
        this.loading?.close()
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

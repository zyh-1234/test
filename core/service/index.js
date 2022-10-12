import MyRequest from './request/request'
import { API_BASE_URL, API_LOCAL_URL, TIME_OUT } from './request/config'
// import localCache from '../../utils/cache'

export const myRequest = new MyRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      // 请求拦截
      const app = 'apiwww.fallon-fj.com'
      // const token = localCache.getCache('token')
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      config.headers = { app: app }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    // 响应拦截
    responseInterceptor: (response) => {
      const d = response.data || {}
      if (d.code !== 0 && d.code !== '0' && typeof window !== 'undefined') {
        // 接口报错处理
        alert(d.description)
        return null
      }
      return d
    },
    responseInterceptorCatch: (err) => {
      console.log('server response error:', err)
      return null
    },
  },
})

export const localRequest = new MyRequest({
  baseURL: `${API_LOCAL_URL}/api`,
  timeout: TIME_OUT,
  interceptorHooks: {
    // 响应拦截
    responseInterceptor: (response) => {
      const d = response.data || {}
      if (d.code !== '0' && typeof window !== 'undefined') {
        // 接口报错处理
        alert(d.description)
        return null
      }
      return d
    },
  },
})

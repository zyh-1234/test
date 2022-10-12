import { myRequest, localRequest } from '..'

const homeAPI = {
  Home: '/home',
  HomeConfig: '/config',
  HomeBanner: '/lunbo',
  HomePromotion: '/cplb_cuxiao',
  HomeRegion: '/cplb_diqu',
  HomeStylistic: '/cplb_fengge',
  HomeHot: '/cplb_rexiao',
  HomeElement: '/cplb_yuansu',
  HomeTheme: '/cplb_zhuti',
}
export function getHome() {
  return localRequest.get({
    url: homeAPI.Home,
  })
}

export function getHomeConfig() {
  return myRequest.post({
    url: homeAPI.HomeConfig,
  })
}
// 轮播
export function getHomeBanner() {
  return myRequest.get({
    url: homeAPI.HomeBanner,
  })
}
// 促销
export function getHomePromotion() {
  return myRequest.get({
    url: homeAPI.HomePromotion,
  })
}
// 地区
export function getHomeRegion() {
  return myRequest.get({
    url: homeAPI.HomeRegion,
  })
}
// 风格
export function getHomeStylistic() {
  return myRequest.get({
    url: homeAPI.HomeStylistic,
  })
}

// 热销
export function getHomeHot() {
  return myRequest.get({
    url: homeAPI.HomeHot,
  })
}

// 元素
export function getHomeElement() {
  return myRequest.get({
    url: homeAPI.HomeElement,
  })
}

// 主题
export function getHomeTheme() {
  return myRequest.get({
    url: homeAPI.HomeTheme,
  })
}

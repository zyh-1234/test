import { localRequest } from '..'

const AboutUsAPI = {
  AboutUs: '/about-us',
}
// 关于我们
export function getAboutUs() {
  return localRequest.get({
    url: AboutUsAPI.AboutUs,
  })
}

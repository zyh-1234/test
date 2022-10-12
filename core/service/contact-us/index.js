import { localRequest } from '..'

const ContactUsAPI = {
  ContactUs: '/contact-us',
}

// 联系我们
export function getContactUs() {
  return localRequest.get({
    url: ContactUsAPI.ContactUs,
  })
}

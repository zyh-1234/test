import cache from './cache'

export const getLxid = (id) => cache.getCache('allCategory').filter((i) => i.id == id)[0].code

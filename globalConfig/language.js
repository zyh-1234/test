import config from './globalConfig'

export const init = () => {
  config.register('language', {
    zh: 'title_zh',
    en: 'title_en',
    ru: 'title_ru',
    sp: 'title_sp',
    ar: 'title_ar',
    ko: 'title_ko',
  })
}

import config from './globalConfig'

export const init = () => {
  config.register('theme', {
    red: {
      primary: '#9c231b',
      higtlight: '#1c1a26',
    },
    black: {
      primary: '#1c1a26',
      hightlight: '#9c231b',
    },
  })
}

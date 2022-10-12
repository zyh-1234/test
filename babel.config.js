module.exports = (api) => {
  api.cache(true)
  const plugins = [
    require('@babel/plugin-transform-runtime'),
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    require('@babel/plugin-proposal-export-default-from'),
    // require("react-hot-loader/babel"),
  ]
  const presets = [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: 'usage',
          corejs: { version: 3, proposals: true },
        },
        'class-properties': { loose: true },
      },
    ],
  ]
  return {
    plugins,
    presets,
  }
}

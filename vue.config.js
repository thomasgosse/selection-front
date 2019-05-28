module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  pwa: {
    name: 'My App',
    themeColor: '#BE9B6F',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};

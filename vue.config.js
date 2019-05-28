module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  pwa: {
    name: 'My App',
    themeColor: '#212121',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};

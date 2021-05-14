const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                'introJs': ['intro.js']
            })
        ]
    },
    pwa: {
        workboxPluginMode: "GenerateSW",
        name: "Passwords",
        themeColor: "#00d1b2",
        msTileColor: "#00d1b2",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "default",
        manifestOptions: {
            name: pwa.name,
            short_name: pwa.name,
            start_url: '/?utm_source=homescreen',
            display: 'standalone',
            theme_color: pwa.themeColor
        }
    }
};
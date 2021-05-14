# Passha
[![CircleCI](https://circleci.com/gh/nsieg/passwords.svg?style=shield)](https://github.com/nsieg/passwords)

Create unique passwords by hashing a service alias and your single master password.

[🔗 Live Demo](https://passwords.nilssiegfried.de)


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Project setup
```
npm install
```

### Generating icons
```
npx vue-pwa-asset-generator -a src/assets/icon-lock.png 
```

### Webpack Bundle Analyzer
package.json:
```
...
"devDependencies": {
    ...
    "webpack-bundle-analyzer": "^3.9.0"
}
```

vue.config.js
```
configureWebpack: {
    ...
    plugins: [
        ...
        new BundleAnalyzerPlugin()
    ]
}
```
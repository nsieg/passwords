# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Generating icons
```
npx vue-pwa-asset-generator -a src/assets/icon-lock.png 
```

### Webpack Bundle Analyzer
package.json:
```
"devDependencies": {
    ...
    "webpack-bundle-analyzer": "^3.9.0"
}
```

vue.config.js
```
configureWebpack: {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}
```
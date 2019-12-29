1. 客户端生成

使用 create-react-app

2. 私人定制

`yarn eject`

3. 支持 scss module - `yarn add babel-plugin-react-css-modules node-sass` - `yarn add @types/react-css-modules post-scss -D` - 配置 babel
   `module.exports = { plugins: [ ['react-css-modules', { filetypes: { '.scss': { syntax: 'postcss-scss' }, }, "webpackHotModuleReloading": true, "autoResolveMultipleImports": true, "generateScopedName": "[folder]_[local]_[hash:hex:5]" }] ] };`
    - 配置 webpackconfig
      `{ test: sassModuleRegex, use: getStyleLoaders( { importLoaders: 2, sourceMap: isEnvProduction && shouldUseSourceMap, modules: true, // getLocalIdent: getCSSModuleLocalIdent, localIdentName: "[folder]_[local]_[hash:hex:5]", }, 'sass-loader' ), },`

注： geLocalIdent 需注释， 不然和 babel 的 localIdentName 生成的文件不符

4. 添加 rem

-   `const px2rem = require('postcss-px2rem')`
-   webpack 配置`{ // Options for PostCSS as we reference these options twice // Adds vendor prefixing based on your specified browser support in // package.json loader: require.resolve('postcss-loader'), options: { // Necessary for external CSS imports to work // https://github.com/facebook/create-react-app/issues/2677 ident: 'postcss', plugins: () => [ require('postcss-flexbugs-fixes'), require('postcss-preset-env')({ autoprefixer: { flexbox: 'no-2009', }, stage: 3, }), // Adds PostCSS Normalize as the reset css with default options, // so that it honors browserslist config in package.json // which in turn let's users customize the target behavior as per their needs. postcssNormalize(), px2rem({ remUnit: 37.5 }), ], sourceMap: isEnvProduction && shouldUseSourceMap, }, },`

-   `import 'lib-flexible';`

5. 添加 graphql 客户端支持， appollo client， 具体见文档

6. 添加页面骨架屏

7. 添加 iconfont

-   使用 svg symbol 的方式

## Todo

[X] 域名备案
[ ] https
[ ] service worker
[ ] icon 更换
[ ] 弹性滚动禁止
[ ] 排名
[ ] docker 化
[ ] serverless nextjs
[] sentry
[] polyfill.js

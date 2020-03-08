# Webpack折腾

## 模块
ES2015中的import和export语句已经被标准化，并且多数浏览器都已经支持。webpack能够提供开箱即用般的支持。
webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。如果你检查 dist/main.js，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 import 和 export，webpack 还能够很好地支持多种其他模块语法，更多信息请查看模块 API。
** 注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你在 webpack 的 loader 系统中使用了一个像是 Babel 或 Bublé 的转译器。

**注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你在 webpack 的 loader 系统中使用了一个像是 Babel 或 Bublé 的转译器**
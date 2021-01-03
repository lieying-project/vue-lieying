// vue.config.js
const path = require('path')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      ? '/'
      : '/'
}
module.exports = {
  chainWebpack: config => {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/icons'))
        .end()

    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  }

}
function resolve(dir) {
  return path.join(__dirname, './', dir)
}


// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})


module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['js', 'vue'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }

  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        //这个是加上自己的路径，
        //注意：试过不能使用别名路径
        path.resolve(__dirname, './src/assets/styles/variables.less'),
      ]
    }
  },

  devServer: {
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/lieying',
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite:{
          '^/api':''
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}



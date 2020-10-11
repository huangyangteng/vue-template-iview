//vue.config.js
let DEV_SERVER = 'http://localhost:8022'

module.exports = {
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            //配置接口转发
            '/api': {
                target: DEV_SERVER, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        // ----性能分析插件
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    }
}

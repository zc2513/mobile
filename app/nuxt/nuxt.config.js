import path from 'path'
const routers = require('./static/router').default
const reqUri = 'http://member.hczhongchuang.com'
export default {

    mode: 'universal',

    target: 'server',

    head: {
        titleTemplate: '%s工程众创网',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'image/x-icon', href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css' }
        ]
    },

    env: {
        baseUrl: reqUri
    },

    css: [
        '~style/index.less'
    ],

    loading: { color: '#ff6620', height: '2px' },

    plugins: [
        '~/plugins/axios',
        '~/plugins/index'
    ],

    components: true,

    buildModules: [
        '@nuxtjs/eslint-module'
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        less: '~style/init/variable.less'
    },

    axios: {
        proxy: true
    },

    proxy: {
        '/api': {
            target: reqUri,
            changeOrigin: true,
            pathRewrite: {
                '^/api/': ''
            }
        }
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push(...routers(resolve))
        }
    },

    build: {
        analyze: process.argv.join('').includes('analyze'),
        transpile: [/vant.*?less/], // 添加后babel才会处理依赖包vant里面的代码
        productionSourceMap: false,
        productionGzip: true,
        productionGzipExtensions: ['js', 'css', 'svg'],
        extractCSS: true,
        postcss: {
            plugins: {
                'postcss-px2rem': {
                    remUnit: 37.5
                }
            }
        },
        babel: {
            plugins: [
                ['import', {
                    libraryName: 'vant',
                    style: (name) => {
                        return `${name}/style/less.js`
                    }
                }, 'vant']
            ]
        },
        extend(config) {
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
            svgRule.exclude = [path.join(__dirname, 'assets/svgs')]
            config.module.rules.push({
                test: /\.svg$/,
                include: [path.join(__dirname, 'assets/svgs')],
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]'
                }
            })
        }
    }
}

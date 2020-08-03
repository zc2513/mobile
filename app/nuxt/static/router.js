// 自定义路由规则
export default function(resolve) {
    return [{
        name: 'testa',
        path: '/testa',
        component: resolve(__dirname, '../pages/test.vue'),
        meta: {
            name: '测试页面',
            icon: 'home',
            sole: 6,
            vc: true
        }
    }]
}

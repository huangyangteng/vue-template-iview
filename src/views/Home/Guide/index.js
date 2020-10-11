export default {
    path: '/guide',
    name: 'guide',
    component: () => import('./Guide.vue'),
    children: [
        {
            path: 'one',
            name: 'one',
            component: () => import('./GuideModuleOne/One.vue')
        }
    ]
}

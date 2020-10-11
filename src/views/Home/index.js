import GuideConfig from './Guide'
export default {
    path: '/',
    name: 'home',
    component: () => import('./Home.vue'),
    children: [GuideConfig]
}

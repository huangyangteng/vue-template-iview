import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeConfig from '../views/Home'
import LoginConfig from '../views/Login'
import ErrorConfig from '../views/Error'
const routes = [HomeConfig, LoginConfig, ErrorConfig]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

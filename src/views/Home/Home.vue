<template>
    <section class="home-container">
        <h1 style="text-align:center">Home</h1>
        <br />
        <ul>
            <li>用户id：{{ userInfo.id }}</li>
            <li>用户名：{{ userInfo.name }}</li>
            <li>用户角色：{{ userInfo.role }}</li>
            <li>jwt：{{ jwt }}</li>
        </ul>
        <Button @click="logout">登出</Button>

        <router-view></router-view>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import { USER_API } from '../../api/user'
import { UTIL_API } from '../../api/util'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.info,
            jwt: state => state.user.jwt
        })
    },
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.push({ name: 'login' })
        },
        async getUserList() {
            await USER_API.getUserList()
        },
        async getError() {
            try {
                let res1 = await UTIL_API.getError()
                console.log('TCL: getError -> res1', res1)
            } catch (error) {
                console.log('TCL: getError -> error', error)
            }
            let res2 = await UTIL_API.getRandomError()
            console.log('TCL: getError -> res2', res2)
        }
    },
    created() {
        if (this.jwt == '') {
            this.$Message.error('登录过期')
            this.$router.push({ name: 'login' })
        }
        this.getUserList()
    }
}
</script>
<style lang="less" scoped>
.home-container {
    padding: 20px;
}
</style>

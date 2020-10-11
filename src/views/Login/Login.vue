<template>
    <section class="login-container">
        <h1>登录</h1>
        <p>用户名：</p>
        <Input v-model="loginInfo.name" />
        <p>密码：</p>
        <Input v-model="loginInfo.pass" type="password" />
        <Button @click="login" class="login-submit" long type="primary"
            >登录</Button
        >
    </section>
</template>
<script>
import { USER_API } from '../../api/user'
export default {
    data() {
        return {
            loginInfo: {
                name: 'super',
                pass: '123'
            }
        }
    },
    methods: {
        async login() {
            let res = await USER_API.login(this.loginInfo)
            this.$store.dispatch('user/login', res)
            // this.$router.push({ name: 'home' })
        }
    }
}
</script>
<style lang="less" scoped>
.login-container {
    width: 500px;
    margin: 40px auto;
    padding: 20px 20px 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    h1 {
        text-align: center;
    }
    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .login-submit {
        margin-top: 20px;
    }
}
.mar-bt-20 {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>

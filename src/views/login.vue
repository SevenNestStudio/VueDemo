<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 11:55:51
 * @LastEditTime: 2022-11-11 16:02:03
 * @FilePath: \Workspace\vuedemo\src\views\login.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login-form/index";
import { getLogin } from "../services";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  mounted() {
    this.$router.push("/");
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ userName, password }) {
      this.login(userName, password);
    },
    //用户登陆
    async login(name, password) {
      const param = {
        name,
        password
      };
      const res = await getLogin(param);
      if (res.returnCode == 0) {
        sessionStorage.setItem("userName", name);
        sessionStorage.setItem("level", res.data.level);
        this.$router.push("/");
      } else {
        this.$Message.error(res.msg);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/login.less";
</style>

<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 11:05:03
 * @FilePath: \Workspace\vuedemo\src\views\HomeView.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

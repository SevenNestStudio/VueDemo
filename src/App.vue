<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:07:33
 * @LastEditTime: 2022-11-12 11:13:16
 * @FilePath: \Workspace\vuedemo\src\App.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 22:29:18
 * @FilePath: \Workspace\vuedemo\src\views\HomeView.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <div class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <!-- theme="dark/light" -->
        <Menu mode="horizontal" theme="dark" active-name="subassembly" @on-select="turnToPage">
          <div class="layout-logo">
            <!-- <Icon type="ios-analytics" /> -->
            <div class="logo-text">
              <span style="color: #fff;">柒號小窝</span>
            </div>
          </div>
          <div class="layout-nav">
            <MenuItem :name=index.name v-for="index in menulist">
            <Icon type="ios-navigate"></Icon>
            {{ index.title }}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Card style="width: 100%; margin: auto;">
        <template #title>
          <Icon type="ios-film-outline"></Icon>
          Classic film
        </template>
        <template #extra>
          <a href="#" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            Change
          </a>
        </template>
        <div :style="{ width: '100%', height: '80%' }">
          <router-view class="routerview" />
        </div>
      </Card>
      <Footer class="layout-footer-center">2022-2025 &copy; 柒號小窝工作室</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      menulist: [
        {
          title: "组件",
          name: "subassembly",
        },
        {
          title: "地图",
          name: "subassembly1"
        },
        {
          title: "视频",
          name: "subassembly2",
        },
        {
          title: "流程图",
          name: "subassembly3",
        },
        {
          title: "其他",
          name: "subassembly4",
        },
        {
          title: "其他",
          name: "dataAnalytics",
        },
      ],
    }
  },
  mounted() { },
  methods: {
    //点击菜单
    turnToPage(route) {
      if (!route) {
        return;
      }
      let Arr = route.split("?");
      if (Arr.length == 0) {
        this.$router.push({ name: Arr[0] });
      } else {
        this.$router.push({ name: Arr[0], query: { signalId: Arr[1] } });
      }
    },
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;

  .logo-text {
    line-height: 30px;
    text-align: center;
  }
}

.layout-nav {
  width: 40%;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}
</style>
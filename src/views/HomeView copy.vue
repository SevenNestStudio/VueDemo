<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 18:32:50
 * @FilePath: \Workspace\vuedemo\src\views\HomeView.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{ heiehi }}</h1>
    <span>{{ tableData1 }}</span>
    <div id="myChart" :style="{ width: '100%', height: '300px' }"></div>
    <vxe-table :align="allAlign" :data="tableData1">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import elementResizeDetectorMaker from "element-resize-detector"
import { defineComponent, ref } from 'vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const allAlign = ref(null)

    const tableData1 = ref([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ])

    return {
      allAlign,
      tableData1
    }
  },
  data() {
    return {
      heiehi: "998755555555"
    }
  },
  mounted() {
    this.echartsceshi()
  },
  methods: {
    echartsceshi() {
      //this.$root => app
      // let myChart = this.$root.echarts.init(
      let myChart = this.$echarts.init(
        document.getElementById("myChart")
      );
      // 绘制图表
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }, true);
      // 随外层div的大小变化自适应
      // const _this = this;
      let erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById("myChart"), () => {
        this.$nextTick(() => {
          myChart.resize();
        });
      });
    }
  },
})
</script>

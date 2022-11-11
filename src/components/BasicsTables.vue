<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 22:14:06
 * @FilePath: \Workspace\vuedemo\src\components\BasicsTables.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
    <div class="basicsT">
      <vxe-table :align="allAlign" :data="tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table>
      <br />
      <vxe-table
          border
          show-header-overflow
          show-overflow
          :row-config="{isHover: true}"
          :data="tableData">
          <vxe-column type="seq" title="序号" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address"></vxe-column>
        </vxe-table>
        <br />
        <vxe-table
          :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column type="radio" width="60"></vxe-column>
          <vxe-column type="checkbox" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="age" title="Age" sortable></vxe-column>
          <vxe-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vxe-column>
          <vxe-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vxe-column>
          <vxe-column field="address" title="Address" show-overflow></vxe-column>
        </vxe-table>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const allAlign = ref(null)
  
      const tableData = ref([
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ])
  
      return {
        allAlign,
        tableData
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
    },
  })
  </script>
  
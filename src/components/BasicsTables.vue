<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-12 16:15:48
 * @FilePath: \Workspace\vuedemo\src\components\BasicsTables.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
  <div class="basicsT">
    <Alert>
      vxe-table 基础表格，基于模板方式使用非常简单、便捷
      （注：每一列 field 字段属性不可更改）
    </Alert>
    <vxe-table :align="allAlign" :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
    <br />
    <Alert>
      使用 row-config.isHover 属性启用 hover 行高亮
    </Alert>
    <vxe-table border show-header-overflow show-overflow :row-config="{ isHover: true }" :data="tableData">
      <vxe-column type="seq" title="序号" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
    <br />
    <Alert>
      可以设置大小尺寸：medium / small / mini
      默认大小：Table 48px 、Button 34px、Input 34px、Checkbox 16px、Radio 16px，可以通过 scss 变量修改
    </Alert>
    <Alert>
      设置大小为 medium，默认大小：Table 44px 、Button 32px、Input 32px、Checkbox 15px、Radio 15px
    </Alert>
    <Alert>
      设置大小为 small，默认大小：Table 40px 、Button 30px、Input 30px、Checkbox 14px、Radio 14px
    </Alert>
    <Alert>
      设置大小为 mini，默认大小：Table 36px 、Button 28px、Input 28px、Checkbox 14px、Radio 14px
    </Alert>
    <vxe-table :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column type="radio" width="60"></vxe-column>
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="sex" title="Sex" :filters="[{ value: '0', label: '女' }, { value: '1', label: '男' }]">
      </vxe-column>
      <vxe-column field="sex2" title="Sex2" sortable :filters="[{ value: '0', label: '女' }, { value: '1', label: '男' }]"
        :filter-multiple="false"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
    <br />
    <Alert>
      设置 type=seq 开启序号列
    </Alert>
    <Alert>
      使用 seq-config={startIndex} 自定义起始序号
    </Alert>
    <vxe-table border height="300" :row-config="{ isHover: true }" :seq-config="{ startIndex: 100 }" :data="tableData">
      <vxe-column type="seq" title="序号" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
    <br />
    <Alert>
      使用 seq-config={seqMethod} 自定义方法
    </Alert>
    <vxe-table border height="300" :row-config="{ isHover: true }" :seq-config="tableSeq" :data="tableData">
      <vxe-column type="seq" title="序号" width="80"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
    <br />
    <Alert type="success">
      API
      <template #desc>列宽，通过设置 width 参数，支持固定像素、百分比、等比例分配等，如果不设置则按照表格的宽度进行均匀分配
        (注：不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "min-width" 实现等比例缩放)</template>
    </Alert>
    <Alert type="success">单元格超出指定宽度自动换行，通过设置 scroll-y="{enabled: false} 关闭虚拟滚动，则支持自动换行</Alert>
    <Alert type="success">通过 tooltip-config.showAll 开启全表工具提示，还可以配合 contentMethod 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null
      使用默认的提示消息
      还可以设置 tooltip-config.enterable 允许鼠标进入 tooltip 中，通过 title-help 设置列标题的帮助提示消息</Alert>
    <Alert type="success">通过 tooltip-config.showAll 开启全表工具提示，还可以配合 contentMethod 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null
      使用默认的提示消息
      还可以设置 tooltip-config.enterable 允许鼠标进入 tooltip 中，通过 title-help 设置列标题的帮助提示消息</Alert>
    <Alert type="success">当内容溢出时显示为省略号，show-overflow 和 show-header-overflow 和 show-footer-overflow
      ellipsis 当内容溢出时显示为省略号
      title 当内容溢出时显示为省略号并用原生 title 显示
      tooltip 当内容溢出时显示为省略号并用 tooltip 显示</Alert>
    <Alert type="success">通过设置 contentMethod 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息
      还可以通过 enterable 开启鼠标是否可进入到 tooltip 中</Alert>
    <Alert type="success">斑马线条纹，通过设置 stripe 参数</Alert>
    <Alert type="success">使用 row-config.isHover 属性启用 hover 行高亮</Alert>
    <Alert type="success">通过设置 border=false|default 默认显示边框</Alert>
    <Alert type="success">通过设置 border=true|full 显示完整边框</Alert>
    <Alert type="success">通过设置 border=outer 显示外边框</Alert>
    <Alert type="success">通过设置 border=inner 显示内边框</Alert>
    <Alert type="success">通过设置 border=none 去掉所有边框</Alert>
    <Alert type="success">圆角边框，通过设置 round 参数，通过 sass 变量 设置圆角值</Alert>
    <Alert type="success">行的样色、单元格样式，表头的样式、表尾的样式、全部都可以完全自定义，通过设置 cell-class-name、header-cell-class-name、row-class-name ...等参数
（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</Alert>
    <Alert type="success">通过 cell-click 事件点击改变颜色</Alert>
    <Alert type="success">行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、可以通过设置 cell-style、header-cell-style、row-style ...等参数
（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</Alert>
    <Alert type="success">重写默认的滚动条样式，可以自行根据不同浏览器的特性去做修改，简单示例如下：
（组件不支持改动原生滚动条，各种兼容性问题可自行实现，该示例仅供参考）</Alert>
    <Alert type="success">隐藏头部，通过设置 show-header 参数</Alert>
    <Alert type="success">当纵向或横向内容过多时，自动出现滚动条</Alert>
    <Alert type="success">通过设置 column-config.resizable 属性启用列宽拖动功能</Alert>
    <Alert type="success">当一个表格高度需要自适应的时候可以设置为最大高度，通过设置 max-height 参数</Alert>
    <Alert type="success">横向滚动条</Alert>
    <Alert type="success">横向滚动条</Alert>
  </div>
</template>
  
<script>
import { defineComponent, ref } from 'vue'
// import { VxeTablePropTypes } from 'vxe-table'
export default defineComponent({
  setup() {
    const allAlign = ref(null)

    const tableData = ref([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ])

    const tableSeq = ref({
      seqMethod({ rowIndex }) {
        return `NO${rowIndex + 1000}`
      }
    })
    // } as VxeTablePropTypes.SeqConfig)

    return {
      allAlign,
      tableData,
      tableSeq
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
<style>

</style>
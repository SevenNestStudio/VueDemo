<!--
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 21:30:54
 * @FilePath: \Workspace\vuedemo\src\components\subassembly.vue
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
-->
<template>
    <Layout :style="{ padding: '0 50px' }">
        <Content :style="{ padding: '24px 0', minHeight: '500px', background: '#fff' }">
            <Layout>
                <Sider hide-trigger collapsible :style="{ overflow: 'hidden', background: '#fff' }">
                    <Menu active-name="basicstables" theme="light" width="auto" @on-select="turnToPage"
                        :open-names="[0]">
                        <Submenu :name=index1.id v-for="index1 in menulist">
                            <template #title>
                                <Icon type="ios-navigate"></Icon>
                                {{ index1.title }}
                            </template>
                            <MenuItem :name="index2.name" v-for="index2 in menulist[index1.id].children">{{
                                    index2.title
                            }}
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
                    <router-view class="routerview" />
                </Content>
            </Layout>
        </Content>
    </Layout>
</template>
  
<script>
export default {
    setup() {
        return {
            menulist: [
                {
                    title: "表格配置",
                    id: 0,
                    children: [
                        { title: "基础表格", name: "basicstables"},
                        { title: "高级表格", name: "controller"},
                    ]
                },
                {
                    title: "检测配置",
                    id: 1,
                    children: [
                        { title: "检测设备", name: "devices", id: 0 },
                        { title: "检测输入", name: "inputs", id: 1 },
                        { title: "网络输出", name: "netOutputs", id: 2 },
                        { title: "本地输出", name: "localOutputs", id: 3 },
                    ]
                },
                {
                    title: "路口配置",
                    id: 2,
                    children: [
                        { title: "路口出口", name: "exits", id: 0 },
                        { title: "路口入口", name: "legs", id: 1 },
                        { title: "信号相位", name: "phases", id: 2 },
                        { title: "定时器", name: "timers", id: 3 },
                        { title: "信号阶段", name: "stages", id: 4 },
                    ]
                },
                {
                    title: "控制优化",
                    id: 3,
                    children: [
                        { title: "方案相序", name: "planSequence", id: 0 },
                        { title: "配时方案", name: "plan", id: 1 },
                        { title: "日计划表", name: "dayplans", id: 2 },
                        { title: "日期调度", name: "schedules", id: 3 },
                        { title: "智能逻辑", name: "minCode", id: 4 },
                    ]
                },
                {
                    title: "运行监视",
                    id: 4,
                    children: [
                        { title: "检测设备", name: "devicesRun", id: 0 },
                        { title: "检测输入", name: "inputsRun", id: 1 },
                        { title: "定时器", name: "timersRun", id: 2 },
                        { title: "网络输出", name: "netOutputsRun", id: 3 },
                        { title: "本地输出", name: "localOutputsRun", id: 4 },
                        { title: "相位状态", name: "phasesRun", id: 5 },
                        { title: "时间表", name: "schedulesRun", id: 6 },
                    ]
                }
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

</style>
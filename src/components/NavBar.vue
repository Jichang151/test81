<template>
  <div id="navBar">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">员工管理</el-menu-item>
      <el-submenu index="2">
        <template slot="title">客户管理</template>
        <el-menu-item index="2-1">客户信息查询</el-menu-item>
        <el-menu-item index="2-2">服务信息查询</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">绩效分析</template>
        <el-menu-item index="3-1">目标设置</el-menu-item>
        <el-menu-item index="3-2">部门绩效指标</el-menu-item>
        <el-menu-item index="3-2">小组绩效</el-menu-item>
        <el-menu-item index="3-2">个人绩效</el-menu-item>
        <el-menu-item index="3-2">价值排名</el-menu-item>
        <el-menu-item index="3-2">价值调整</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">参数设置</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
  }

</script>
<style scoped>
</style>


<template>
  <div id="sideBar">
    <el-row>
      <el-col :span="12">
        <img src="../assets/logo.png" style="width:200px;height:40px;margin-right:200px;background-color:#ccc;">
        <!-- <h5>自定义颜色</h5> -->
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1" @click="perManage">
              <i class="el-icon-menu"></i>
              <span slot="title">人员管理</span>
            </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>  
              <span >绩效分析</span>
            </template>
              <el-menu-item index="1-1" @click="goalSetting">目标设置</el-menu-item>
              <el-menu-item index="1-2" @click="department">部门绩效分析</el-menu-item>
              <el-menu-item index="1-3"  @click="group">小组绩效</el-menu-item>
              <el-menu-item index="1-4"  @click="personnel">个人绩效</el-menu-item>
              <el-menu-item index="1-5"  @click="valueRanking">价值排名</el-menu-item>
              <el-menu-item index="1-6" @click="valueAdjust">价值调整</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>客户管理</span>
            </template>
              <el-menu-item index="3-1" @click="clientSearch">客户信息查询</el-menu-item>
              <el-menu-item index="3-2" @click="service">服务信息查询</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">参数设置</span>
            </template>
            <el-menu-item index="4-1" @click="myReport">我的报告</el-menu-item>
            <el-menu-item index="4-2" @click="groupReport">小组报告</el-menu-item>
            <el-menu-item index="4-3" @click="componyReport">公司报告</el-menu-item>
          </el-submenu>
          <el-menu-item index="5" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">服务信息查询</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
    #sideBar{
        width:400px;
    }
</style>
<script>
  export default{
    methods: {
      perManage(){
        this.$router.push({name:'personnel'})
      },
      clientSearch(){
        this.$router.push({name:'client'})
      },
      goalSetting(){
        this.$router.push({name:'goalSetting'})
      },
      department(){
        this.$router.push({name:'department'})
      },
      group(){
        this.$router.push({name:'group'})
      },
      personnel(){
        this.$router.push({name:'personnel'})
      },
      valueRanking(){
        this.$router.push({name:'valueRanking'})
      },
      valueAdjust(){
        this.$router.push({name:'valueAdjust'})
      },
      service(){
        this.$router.push({name:'service'})
      },
      myReport(){
        this.$router.push({name:'myReport'})
      },
      groupReport(){
        this.$router.push({name:'groupReport'})
      },
      componyReport(){
        this.$router.push({name:'componyReport'})
      }
      
    }
  }
</script>
<style scoped>
  
</style>


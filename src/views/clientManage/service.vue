<template>
  <div id="service">
    <div class="search">
      <div class="search_left">
        <span>公司名称：</span>
        <el-input class="inputName"></el-input>
      </div>
      <div class="search_right">
        <el-button type="primary" plain icon="el-icon-search" style="position:">查询</el-button>
      </div>
    </div>
    <div class="search_content">
      <div class="content_top">
        <div class="search_table">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content_btm">
        <div class="con_bt_lf">
          <span>服务次数：{{serviceTime}}</span>
          <img src="@/assets/service1.png" alt="图片加载失败">
        </div>
        <div class="con_bt_rt">
          <div>
            <span>服务跟踪</span>
            <div class="tail_after">
                <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #service {
    width: 1200px;
    height: 400px;
    /* background-color: #cccccc; */
    position: relative;
    top: -310px;
    margin-left:210px;
    display: flex;
    flex-direction: column;
  }

  #service .search {
    width: 990px;
    height: 40px;
    /* background-color: #00ff00; */
    position: absolute;
    left: 210px;
    flex: none;
    display: flex;
  }

  #service .search .search_left {
    flex: none;
    display: flex;
  }

  #service .search .search_left span {
    flex: none;
  }

  #service .search .search_left .inputName {
    flex: none;
    width: 250px;
  }

  #service .search .search_right {
    flex: auto;
  }

  #service .search_content {
    width: 990px;
    height: 200px;
    /* background-color: #0000ff; */
    position: absolute;
    left: 210px;
    flex: auto;
    top: 60px;
  }

  #service .search_content .content_btm {
    width: 990px;
    height: 600px;
    /* background-color: #0000ff; */
    margin-top: 10px;
  }

  #service .search_content .content_btm .serviceTime {
    width: 420px;
    border: 1px solid #000;
  }

  #service .search_content .content_btm .con_bt_lf {
    /* position:absolute;
    left:10px; */
    width: 400px;
    /* display:block; */
  }

  #service .search_content .content_btm .con_bt_lf img {
    margin-top: 10px;
  }
  #service .search_content .content_btm .con_bt_rt{
      width: 400px;
  }
</style>
<script>
  export default {
    data() {
      return {
        serviceTime: 11,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

</script>

<template>
  <div id="client">
    <div class="container">
      <div class="search">
        <span>公司名称：</span>
        <el-input placeholder="请输入内容" v-model="input10" clearable style="width:240px;margin-right:0;"></el-input>
        <el-button type="primary" icon="el-icon-search" class="searchBtn">查询</el-button>
      </div>
      <div class="searchTable">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" style="margin-top:10px;">
        </el-pagination>
      </div>

    </div>
  </div>
</template>
<style scoped>
  #client {
    width: 1200px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -600px;
  }

  #client .container {
    width: 1000px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  #client .container .search {
    width: 1000px;
    position: absolute;
    left: 200px;
    flex: none;
  }

  #client .container .searchTable {
    width: 1000px;
    height: 300px;
    position: absolute;
    left: 200px;
    top: 60px;
    flex: auto;
  }

</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    }
  }

</script>

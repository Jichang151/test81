<template>
  <div id="personnel">
    <div class="container">
      <div class="search">
        <span>大组：</span>
        <el-select v-model="value" placeholder="请选择" style="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span>小组：</span>
        <el-select v-model="value" placeholder="请选择" style="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span>名称：</span>
        <el-input placeholder="请输入内容" v-model="input10" clearable style="width:150px;margin-left:20px;">
        </el-input>
        <el-button type="primary" plain icon="el-icon-search" style="position:">查询</el-button>
        <el-button type="success" plain icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
        <div>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>

      </div>
      <div class="searchTable">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input10: '',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        options: [{
            value: "选项1",
            label: "小组1"
          },
          {
            value: "选项2",
            label: "小组2"
          },
          {
            value: "选项3",
            label: "小组3"
          },
          {
            value: "选项4",
            label: "小组4"
          },
          {
            value: "选项5",
            label: "小组5"
          }
        ],

        value: "",


        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    }
  };

</script>
<style scoped>
  #personnel {
    width: 1200px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -600px;
  }

  #personnel .container {
    width: 100%;
    /* width: 1200px; */
    display: flex;
    flex-direction: column;
  }

  #personnel .container .search {
    /* display:flex; */
    width: 1000px;
    position: absolute;
    left: 200px;
    flex: none;
  }

  #personnel .container .searchTable {
    width: 1000px;
    height: 300px;
    position: absolute;
    left: 200px;
    top: 60px;
    /* background-color: #cccccc; */
    flex: auto;
  }

</style>

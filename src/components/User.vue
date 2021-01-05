<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="Id"
            prop="id">
          </el-table-column>

          <el-table-column
            label="Name"
            prop="name">
          </el-table-column>
          <el-table-column
            label="Addr"
            prop="arrd">
          </el-table-column>
          <el-table-column
            label="Age"
            prop="age">
          </el-table-column>
          <el-table-column
            label="Date"
            prop="date">
          </el-table-column>

          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row.id)">Edit
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete( scope.row.id)">Delete

              </el-button>
<!--              <el-button-->
<!--                size="mini"-->
<!--                type="danger"-->
<!--                @click="add( scope.row.id)">Add-->

<!--              </el-button>-->
              <el-button size="mini" style="margin-right: 42px;margin-top: 10px" @click="add(scope.row.id)">Add</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      tableData: [],
      search: '',
    }
  },
  created() {
    this.$axios({
      url: 'http://127.0.0.1:8000/user/get_user/',
      method: 'get',
    }).then(response => {
      console.log(response.data)
      this.tableData = response.data
    }).catch(error => {
      console.log(reeor, 111)
    })
  },
  methods: {
    handleEdit(id) {
      console.log(id)
      this.$router.push('/update?id=' + id)
    },
    handleDelete(id) {
      console.log(id);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',

        },
        this.$axios({
          url:'http://127.0.0.1:8000/user/del_user/',
          methood:'get',
          params:{
            id:id
          }
        }).then(res => {
          // alert('删除已成功')
          // console.log(res.data)
          // this.$router.push('/user/1')
          this.$router.go(0)
        }).catch(arr => {
          console.log(arr);
        })
        );
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    add(id){
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: burlywood;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: bisque;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: darksalmon;
  color: #333;
  text-align: center;
  line-height: 100px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

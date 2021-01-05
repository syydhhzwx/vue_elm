<template>
  <div>
    姓名：<input type="text" v-model="name"> <br>
    年龄：<input type="text" v-model="age"> <br>
    日期：<input type="text" v-model="date"> <br>
    地址：<input type="text" v-model="addr"> <br>
    工资：<input type="text" v-model="salary"> <br>
    <el-button size="mini" style="margin-right: 42px;margin-top: 10px" @click="add">Add</el-button>
  </div>
</template>

<script>
export default {
  name: "Add",
  data(){
    return {
      name:'',
      age:'',
      date:'',
      addr:'',
      salary:'',
    }
  },
  methods:{
    add(){
      console.log(this.name);
      this.$axios({
        url:'http://127.0.0.1:8000/user/add_user/',
        metho:'get',
        params:{
          name:this.name,
          age:this.age,
          date:this.date,
          addr:this.addr,
          salary:this.salary,
        }
      }).then(res => {
        console.log(res.data);
        this.$router.push('/user')
      }).catch(error => {
        console.log(111)
      })
    }
  }
}
</script>

<style scoped>

</style>

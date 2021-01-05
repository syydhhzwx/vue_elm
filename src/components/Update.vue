<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">&nbsp;</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="姓名" prop="pass">
              <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="checkPass">
              <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>
<!--            <el-form-item label="日期" prop="age">-->
<!--              <el-input v-model.number="ruleForm.date"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="地址" prop="checkPass">
              <el-input type="text" v-model="ruleForm.addr" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="工资" prop="checkPass">
              <el-input type="text" v-model="ruleForm.salary" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleForm)">修改</el-button>

            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple">&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Update",
  data() {


    return {
      user: {},
      ruleForm: {
        name: '',
        age: '',
        date:'',
        addr:'',
        salary:'',
        id:this.$route.query.id

      },

    };
  },
  methods:{
    submitForm(ruleForm){
      console.log(ruleForm);
      this.$axios({
        url:'http://127.0.0.1:8000/user/update_user/',
        method:'get',
        // params:'id=' + ruleForm.id + '&name=' +ruleForm.name + '&age=' +ruleForm.age + '&date=' + ruleForm.date + '&addr=' + ruleForm.addr + '&salsry=' + ruleForm.salary + '&Access-Control-Allow-Origin'
        params:{
          id:ruleForm.id,
          name:ruleForm.name,
          age:ruleForm.age,
          // date:ruleForm.date,
          addr:ruleForm.addr,
          salary:ruleForm.salary,
        }
      }).then(response => {
        console.log(response.data);
        this.$router.push('/user')
      }).catch(error => {
        console.log(reeor,111);
      })
    }
  }
}
</script>

<style scoped>

</style>

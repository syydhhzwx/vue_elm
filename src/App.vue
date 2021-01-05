<template>
  <div id="app">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>
    <h3>主页</h3>
<!--    <el-button type="success" round></el-button>-->
    <el-link type="primary"><router-link to="/user">用户管理</router-link></el-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      console.log('go back');
    }
  }
}
</script>

<style>
</style>

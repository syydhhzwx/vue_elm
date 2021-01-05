import Vue from 'vue'
import Router from 'vue-router'
import User from "../components/User";
import Update from "../components/Update";
import Add from "../components/Add";


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/user',component:User},
    {path:'/update',component:Update},
    {path:'/add',component:Add},
    {path:'/*',redirect:'/user'},
  ]
})

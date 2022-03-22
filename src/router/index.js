import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainHome.vue'
import Register from '../views/MainRegister.vue'
import Login from '../views/MainLogin.vue'
import Users from '../views/MainUsers.vue'
import axios from 'axios';
import Edit from '../views/MainEdit.vue'


function AdminAuth(to, from, next){
  if(localStorage.getItem('token') != undefined){

    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    axios.post("http://localhost:8686/validate",{},req).then(res => {
      console.log(res);
      next();
    }).catch(err => {
      console.log(err.response);
      next("/login");
    });
  }else{
    next("/login");
  }
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: Home
  },
  {
    path: '/register',
    name: 'MainRegister',
    component: Register
  },
  {
    path: '/login',
    name: 'MainLogin',
    component: Login
  },
  {
    path: '/admin/users',
    name: 'MainUsers',
    component: Users,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/users/edit/:id',
    name: 'MainUserEdit',
    component: Edit,
    beforeEnter: AdminAuth
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

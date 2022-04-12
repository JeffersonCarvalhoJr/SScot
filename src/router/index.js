import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainHome.vue'
import Register from '../views/MainRegister.vue'
import Login from '../views/MainLogin.vue'
import Users from '../views/manager/MainUsers.vue'
import Suppliers from '../views/buyer_manager/MainSuppliers.vue'
import axios from 'axios';
import Edit from '../views/manager/MainEdit.vue'
import HomeModules from '../views/HomeModules.vue'
import UserEdit from '../views/user/UserEdit.vue'



function AdminAuth(to, from, next) {
    if (localStorage.getItem('token') != undefined) {

        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.post("https://apiuserssscot.herokuapp.com/validate", {}, req).then(res => {
            console.log(res);
            next();
        }).catch(err => {
            console.log(err.response);
            console.log(req);
            next("/login");
        });
    } else {
        next("/login");
    }
}


Vue.use(VueRouter)

const routes = [{
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
        name: 'np',
        component: Users,
        beforeEnter: AdminAuth
    },
    {
        path: '/admin/users/edit/:id',
        name: 'MainUserEdit',
        component: Edit,
        beforeEnter: AdminAuth
    },
    {
        path: '/home',
        name: 'HomeModules',
        component: HomeModules,
    },
    {
        path: '/users/edit/:id',
        name: 'UserEdit',
        component: UserEdit,
    },

    {
        path: '/admin/supplier',
        name: 'np',
        component: Suppliers,
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
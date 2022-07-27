import './bootstrap';

import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue';

import axios from "axios";

import App from './Components/App.vue'
import NavBar from './Components/NavBar/NavBar.vue'

import UserIndex from './Components/User/UserIndex.vue'
import AddUser from './Components/User/AddUser.vue'
import EditUser from './Components/User/EditUser.vue'

import RoleIndex from './Components/Role/RoleIndex.vue'
import AddRole from './Components/Role/AddRole.vue'
import EditRole from './Components/Role/EditRole.vue'

import NotFound from './Components/NotFound/NotFound.vue'
import HomeIndex from './Components/Home/HomeIndex.vue'
import LoginIndex from './Components/Login/LoginIndex.vue'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
});

const check_islogged = (next) => {
  axios.get('/api/islogged')
  .then(() =>{
    next()
  })
  .catch(() => {
    return next({name: 'login'})
  })
}

const redirectHome = (next) => {
  axios.get('/api/islogged')
  .then(() =>{
    return next({name: 'home'})
  })
  .catch(() => {
    return next()
  })
}

const routes = [
  { 
    path: '/login', 
    name: 'login', 
    component: LoginIndex,
    beforeEnter: (to, form, next) => {
      redirectHome(next)
    } 
  },
  {
    path: '/',
    component: NavBar,
    children: [
      { 
        path: '/', 
        name: 'home', 
        component: HomeIndex,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/user', 
        name: 'user', 
        component: UserIndex,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/user/add', 
        name: 'adduser', 
        component: AddUser,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/user/edit/:id', 
        name: 'edituser', 
        component: EditUser,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/role', 
        name: 'role', 
        component: RoleIndex,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/role/add', 
        name: 'addrole', 
        component: AddRole,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
      { 
        path: '/role/edit/:id', 
        name: 'editrole', 
        component: EditRole,
        beforeEnter: (to, form, next) => {
          check_islogged(next)
        } 
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

const app = createApp(App)
app.config.globalProperties.axios=instance
app.use(router)
app.mount('#app')
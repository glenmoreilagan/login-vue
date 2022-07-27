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


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/login', name: 'login', component: LoginIndex },
  {
    path: '/',
    component: NavBar,
    children: [
      { 
        path: '/', 
        name: 'home', 
        component: HomeIndex,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/user', 
        name: 'user', 
        component: UserIndex,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/user/add', 
        name: 'adduser', 
        component: AddUser,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/user/edit/:id', 
        name: 'edituser', 
        component: EditUser,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/role', 
        name: 'role', 
        component: RoleIndex,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/role/add', 
        name: 'addrole', 
        component: AddRole,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
      { 
        path: '/role/edit:/id', 
        name: 'editrole', 
        component: EditRole,
        beforeEnter: (to, form, next) => {
          axios.get('/api/islogged')
          .then(() =>{
            next()
          })
          .catch(() => {
            return next({name: 'login'})
          })
        } 
      },
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)

app.config.globalProperties.axios=instance
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
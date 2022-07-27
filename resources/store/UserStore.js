import { reactive } from "vue"
import axios from "axios";

const UserState = reactive({
  userList : [],
  roleList: [],
  userInfo: {
    name: '',
    email: '',
    role_id: 0,
    password: '',
    password_confirmation: ''
  },
  errValidation : []
})

const UserMethods = {
  getAllUsers() {
    axios.get('/api/users')
    .then(res => {
      // console.log(res.data)
      UserState.userList = res.data.map((value, index) => ({
        user_id: value.id,
        name: value.name,
        email: value.email,
        role_name: value.role_name,
      }))
    }).catch(err => {
      console.log(err)
    })
  },
  deleteUser(data) {
    axios.delete(`/api/users/${data.user_id}`)
    .then(res => {
      // console.log(res.data)
      if (res.data) {
        UserState.userList = UserState.userList.filter(user => user.user_id !== data.user_id)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  findUser(data) {
    axios.get(`/api/users/${data.id}`)
    .then(res => {
      // console.log(res.data)
      UserState.userInfo = {
        name : res.data.name,
        email : res.data.email,
        role_id : res.data.role_id,
      }
    }).catch(err => {
      console.log(err)
    })
  },
  updateUser(data) {
    axios.put(`/api/users/${data.id}`, UserState.userInfo)
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      UserState.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))
      console.log(err)
    })
  },
  addUser() {
    axios.post(`/api/users`, UserState.userInfo)
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      UserState.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))
      console.log(err)
    })
  },
  getAllRoles() {
    axios.get('/api/roles')
    .then(res => {
      // console.log(res.data)
      UserState.roleList = res.data.map((value, index) => ({
        role_id: value.id,
        role_name: value.role_name,
        role_desc: value.role_desc
      }))
    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  UserState,
  UserMethods
}
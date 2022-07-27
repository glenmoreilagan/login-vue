import { reactive } from "vue"
import axios from "axios";

const RoleState = reactive({
  roleList : [],
  roleInfo: {
    role_name: '',
    role_desc: '',
  },
  errValidation : []
})

const RoleMethods = {
  getAllRoles() {
    axios.get('/api/roles')
    .then(res => {
      // console.log(res.data)
      RoleState.roleList = res.data.map((value, index) => ({
        role_id: value.id,
        role_name: value.role_name,
        role_desc: value.role_desc,
      }))
    }).catch(err => {
      console.log(err)
    })
  },
  deleteRole(data) {
    axios.delete(`/api/roles/${data.role_id}`)
    .then(res => {
      // console.log(res.data)
      if (res.data) {
        RoleState.roleList = RoleState.roleList.filter(role => role.role_id !== data.role_id)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  findRole(data) {
    axios.get(`/api/roles/${data.id}`)
    .then(res => {
      // console.log(res.data)
      RoleState.roleInfo = {
        role_id : res.data.id,
        role_name : res.data.role_name,
        role_desc : res.data.role_desc,
      }
    }).catch(err => {
      console.log(err)
    })
  },
  updateRole(data) {
    axios.put(`/api/roles/${data.id}`, RoleState.roleInfo)
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      RoleState.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))
      console.log(err)
    })
  },
  addRole() {
    axios.post(`/api/roles`, RoleState.roleInfo)
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      RoleState.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))
      console.log(err)
    })
  },
}

export default {
  RoleState,
  RoleMethods
}
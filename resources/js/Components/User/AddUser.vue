<template lang="">
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <i class="bi bi-caret-right-fill"></i> Add User
      </div>
      <div class="card-body">
        <label>Fullname</label>
        <input class="form-control form-control-sm" type="text" v-model="UserStore.UserState.userInfo.name">
        <p class="text-danger" v-if="UserStore.UserState.errValidation?.name">
          {{ UserStore.UserState.errValidation.name[0]}}
        </p>
    
        <label>Email</label>
        <input class="form-control form-control-sm" type="text" v-model="UserStore.UserState.userInfo.email">
        <p class="text-danger" v-if="UserStore.UserState.errValidation?.email">
          {{ UserStore.UserState.errValidation.email[0]}}
        </p>
    
    
        <label>Role</label>
        <select class="form-control form-control-sm" v-model="UserStore.UserState.userInfo.role_id">
          <option :value="0">Select Role</option>
          <option v-for="(role, index) in UserStore.UserState.roleList" :value="role.role_id" :key="role.role_id">{{ role.role_name }}</option>
        </select>
    
        <label>Password</label>
        <input class="form-control form-control-sm" type="password" v-model="UserStore.UserState.userInfo.password">
        <p class="text-danger" v-if="UserStore.UserState.errValidation?.password">
          {{ UserStore.UserState.errValidation.password[0]}}
        </p>
    
        <label>Confirm Password</label>
        <input class="form-control form-control-sm" type="password" v-model="UserStore.UserState.userInfo.password_confirmation">
        <button class="btn btn-primary btn-sm mt-3 btnSave" @click="UserStore.UserMethods.addUser">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'AddUser',
  setup() {
    const UserStore = inject('UserStore')
    return {
      UserStore
    }
  },
  components : {
  },
  created() {
    console.log(`the component is now created.`)
   
    this.UserStore.UserState.userInfo = {
      name: '',
      email: '',
      role_id: 0,
      password: '',
      password_confirmation: ''
    }
    this.UserStore.UserState.errValidation = []
    this.UserStore.UserMethods.getAllRoles()
  },
}
</script>
<template lang="">
  <!-- <NavBar /> -->
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <i class="bi bi-caret-right-fill"></i> Add Role
      </div>
      <div class="card-body">
        <label>Role</label>
        <input class="form-control form-control-sm" type="text" v-model="RoleStore.RoleState.roleInfo.role_name">
    
        <label>Description</label>
        <input class="form-control form-control-sm" type="text" v-model="RoleStore.RoleState.roleInfo.role_desc">
    
        <button class="btn btn-primary btn-sm mt-3 btnSave" @click="RoleStore.RoleMethods.addRole">SAVE</button>
      </div>
    </div>

  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'AddRole',
  setup() {
    const RoleStore = inject('RoleStore')
    return {
      RoleStore
    }
  },
  components: {
  },
  created() {
    console.log(`the component is now created.`)
  }
}
</script>
<template lang="">
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <i class="bi bi-caret-right-fill"></i> Edit Role
      </div>
      <div class="card-body">
        <label>Role</label>
        <input class="form-control form-control-sm" type="text" v-model="RoleStore.RoleState.roleInfo.role_name">
        <p class="text-danger" v-if="RoleStore.RoleState.errValidation?.role_name">
          {{ RoleStore.RoleState.errValidation.role_name[0]}}
        </p>
    
        <label>Description</label>
        <input class="form-control form-control-sm" type="text" v-model="RoleStore.RoleState.roleInfo.role_desc">
        <p class="text-danger" v-if="RoleStore.RoleState.errValidation?.role_desc">
          {{ RoleStore.RoleState.errValidation.role_desc[0]}}
        </p>
    
        <button class="btn btn-primary btn-sm mt-3 btnSave" @click="RoleStore.RoleMethods.updateRole(this.$route.params)">SAVE</button>
      </div>
    </div>

  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'EditRole',
  setup() {
    const RoleStore = inject('RoleStore')
    return {
      RoleStore
    }
  },
  components : {
  },
  created() {
    console.log(`the component is now created.`)
    
    this.RoleStore.RoleState.errValidation = []
    this.RoleStore.RoleMethods.findRole(this.$route.params)
  }
}
</script>
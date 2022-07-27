<template lang="">
  <tr v-for="(role, index) in RoleStore.RoleState.roleList">
    <td>{{role.role_name}}</td>
    <td>{{role.role_desc}}</td>
    <td class="center">
      <router-link :to="{ name: 'editrole', params: { id: role.role_id } }"><i class="bi bi-pencil-square btn-action" title="Edit"></i></router-link>
      {{" "}}
      <i class="bi bi-x-square-fill btn-action" @click="RoleStore.RoleMethods.deleteRole(role)" title="Delete"></i>
    </td>
  </tr>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'RoleItem',
  setup() {
    const RoleStore = inject('RoleStore')
    return {
      RoleStore
    }
  },
}
</script>
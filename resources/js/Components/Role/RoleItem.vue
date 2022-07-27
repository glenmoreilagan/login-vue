<template lang="">
  <tr v-for="(role, index) in roles">
    <td>{{role.role_name}}</td>
    <td>{{role.role_desc}}</td>
    <td class="center">
      <router-link :to="{ name: 'editrole', params: { id: role.role_id } }"><i class="bi bi-pencil-square btn-action" title="Edit"></i></router-link>
      {{" "}}
      <i class="bi bi-x-square-fill btn-action" @click="$emit('DeleteAction', {role_id : role.role_id, action : 'delete'})" title="Delete"></i>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'RoleItem',
  props: ['roles']
}
</script>

<style lang="">
  
</style>
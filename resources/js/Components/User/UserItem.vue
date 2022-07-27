<template lang="">
  <tr v-for="(user, index) in users">
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td><span className='badge custom-badge-primary'>{{user.role_name}}</span></td>
    <td class="center">
      <router-link :to="{ name: 'edituser', params: { id: user.user_id } }"><i class="bi bi-pencil-square btn-action" title="Edit"></i></router-link>
      {{" "}}
      <i class="bi bi-archive btn-action" @click="$emit('DeleteAction', {user_id : user.user_id, action : 'delete'})" title="Delete"></i>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'UserItem',
  props: ['users']
}
</script >

<style scoped>

</style>
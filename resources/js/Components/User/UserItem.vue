<template lang="">
  <tr v-for="(user, index) in UserStore.UserState.userList">
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td><span className='badge custom-badge-primary'>{{user.role_name}}</span></td>
    <td class="center">
      <router-link :to="{ name: 'edituser', params: { id: user.user_id } }"><i class="bi bi-pencil-square btn-action" title="Edit"></i></router-link>
      {{" "}}
      <i class="bi bi-archive btn-action" @click="UserStore.UserMethods.deleteUser(user)" title="Delete"></i>
    </td>
  </tr>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'UserItem',
  setup() {
    const UserStore = inject('UserStore')
    return {
      UserStore
    }
  }
}
</script>
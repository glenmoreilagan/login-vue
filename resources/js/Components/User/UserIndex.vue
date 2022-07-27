<template lang="">
  <div class="container mt-3">
    <router-link class="mt-3" :to="'/user/add'"><button class="btn btn-primary btn-sm btnNew">NEW</button></router-link>
    <div class="table table-responive mt-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th class="center">Action</th>
          </tr>
        </thead>
        <tbody>
          <UserItemVue />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import UserItemVue from './UserItem.vue'

export default {
  name: 'UserIndex',
  setup() {
    const UserStore = inject('UserStore')
    return {
      UserStore
    }
  },
  components: {
    UserItemVue
  },
  created() {
    console.log(`the component is now created.`)

    this.UserStore.UserMethods.getAllUsers()
  }
}
</script>
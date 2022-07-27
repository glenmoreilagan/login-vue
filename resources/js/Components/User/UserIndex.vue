<template lang="">
  <!-- <NavBar /> -->
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
          <UserItemVue v-bind:users="userList" v-on:DeleteAction="DeleteAction" />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import NavBar from '../../Components/NavBar/NavBar.vue'
import UserItemVue from './UserItem.vue'

export default {
  name: 'UserIndex',
  components: {
    // NavBar,
    UserItemVue
  },
  data() {
    return {
      userList: []
    }
  },
  created() {
    let me = this
    console.log(`the component is now created.`)

    me.axios.get('/api/users')
      .then(res => {
        // console.log(res.data)

        me.userList = res.data.map((value, index) => ({
          user_id: value.id,
          name: value.name,
          email: value.email,
          role_name: value.role_name,
        }))
      })
  },
  methods: {
    DeleteAction(data) {
      let me =this
      me.axios.delete(`/api/users/${data.user_id}`)
      .then(res => {
       if(res.data) {
          me.userList = me.userList.filter(user => user.user_id !== data.user_id)
        }
      })
    }
  },

}
</script>
<style>

</style>
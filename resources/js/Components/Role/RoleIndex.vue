<template lang="">
  <!-- <NavBar /> -->
  <div class="container mt-3">
    <router-link class="mt-3" :to="'/role/add'"><button class="btn btn-primary btn-sm btnNew">NEW</button></router-link>
    <div class="table table-responive mt-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Role</th>
            <th>Description</th>
            <th class="center">Action</th>
          </tr>
        </thead>
        <tbody>
          <RoleItemVue v-bind:roles="roleList" v-on:DeleteAction="DeleteAction" />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import NavBar from '../../Components/NavBar/NavBar.vue'
import RoleItemVue from './RoleItem.vue'

export default {
  name: 'RoleIndex',
  components: {
    // NavBar,
    RoleItemVue
  },
  data() {
    return {
      roleList: []
    }
  },
  created() {
    let me = this
    console.log(`the component is now created.`)

    me.axios.get('/api/roles')
      .then(res => {
        // console.log(res.data)

        me.roleList = res.data.map((value, index) => ({
          role_id: value.id,
          role_name: value.role_name,
          role_desc: value.role_desc
        }))
      })
  },
  methods: {
    DeleteAction(data) {
      let me =this
      me.axios.delete(`/api/roles/${data.role_id}`)
      .then(res => {
       if(res.data) {
          me.roleList = me.roleList.filter(role => role.role_id !== data.role_id)
        }
      })
    }
  },

}
</script>
<style>

</style>
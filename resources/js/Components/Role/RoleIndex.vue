<template lang="">
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
          <RoleItemVue />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import RoleItemVue from './RoleItem.vue'

export default {
  name: 'RoleIndex',
  setup() {
    const RoleStore = inject('RoleStore')
    return {
      RoleStore
    }
  },
  components: {
    RoleItemVue
  },
  created() {
    console.log(`the component is now created.`)

    this.RoleStore.RoleMethods.getAllRoles()
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
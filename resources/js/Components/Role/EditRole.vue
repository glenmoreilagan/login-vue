<template lang="">
  <!-- <NavBar /> -->
  <div class="container mt-3">
    <h4>ADD ROLE</h4>

    <label>Role</label>
    <input class="form-control form-control-sm" type="text" v-model="roleInfo.role_name">

    <label>Description</label>
    <input class="form-control form-control-sm" type="text" v-model="roleInfo.role_desc">

    <button class="btn btn-primary btn-sm mt-3 btnSave" @click="saveRole">SAVE</button>
  </div>
</template>
<script>
// import NavBar from '../../Components/NavBar/NavBar.vue'

export default {
  name: 'EditRole',
  components : {
    // NavBar
  },
  data() {
    return {
      roleInfo: {
        role_name: '',
        role_desc: ''
      },

      errValidation : []
    }
  },
  created() {
    let me = this
    const link_params = me.$route.params

    me.axios.get(`/api/roles/${link_params.id}`)
    .then(res => {
      // console.log(res.data)

      me.roleInfo = {
        role_name : res.data.role_name,
        role_desc : res.data.role_desc
      }
    })
  },

  methods: {
    saveRole() {
      let me = this
      const link_params = me.$route.params

      me.errValidation = []

      me.axios.put(`/api/roles/${link_params.id}`, me.roleInfo)
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        // console.log(err)
        me.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))
      })
    }
  },
}
</script>
<style scoped>
.btnSave {
  width: 100px;
}
</style>
<template lang="">
  <!-- <NavBar /> -->
  <div class="container mt-3">
    <h4>ADD USER</h4>

    <label>Fullname</label>
    <input class="form-control form-control-sm" type="text" v-model="userInfo.name">
    <p class="text-danger" v-if="errValidation?.name">
      {{ errValidation.name[0]}}
    </p>

    <label>Email</label>
    <input class="form-control form-control-sm" type="text" v-model="userInfo.email">
    <p class="text-danger" v-if="errValidation?.email">
      {{ errValidation.email[0]}}
    </p>


    <label>Role</label>
    <select class="form-control form-control-sm" v-model="userInfo.role_id">
      <option :value="0">Select Role</option>
      <option v-for="(role, index) in roleList" :value="role.role_id" :key="role.role_id">{{ role.role_name }}</option>
    </select>

    <label>Password</label>
    <input class="form-control form-control-sm" type="password" v-model="userInfo.password">
    <p class="text-danger" v-if="errValidation?.password">
      {{ errValidation.password[0]}}
    </p>

    <label>Confirm Password</label>
    <input class="form-control form-control-sm" type="password" v-model="userInfo.password_confirmation">
    <button class="btn btn-primary btn-sm mt-3 btnSave" @click="saveUser">SAVE</button>
  </div>
</template>
<script>
// import NavBar from '../../Components/NavBar/NavBar.vue'

export default {
  name: 'AddUser',
  components : {
    // NavBar
  },
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        role_id: 0,
        password: '',
        password_confirmation: ''
      },
      roleList: [],

      errValidation : []
    }
  },
  created() {
    let me = this

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
    saveUser() {
      let me = this
      me.errValidation = []
      // console.log(JSON.parse(JSON.stringify(me.userInfo)));

      me.axios.post('/api/users', me.userInfo)
      .then(res => {
        console.log(res.data)
        me.userInfo.name = ''
        me.userInfo.email = ''
        me.userInfo.role_id = 0
        me.userInfo.password = ''
        me.userInfo.password_confirmation = ''
      }).catch(err => {
        // console.log(err)
        me.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))

        // console.log(JSON.parse(JSON.stringify(me.errValidation)));
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
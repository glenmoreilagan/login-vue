<template lang="">
  <div class="container mt-3">
    <!-- <h1>HOME</h1> -->
    <div>
      <h5>Name</h5>{{userInfo?.name}}
    </div>
    <div>
      <h5>Email</h5>{{userInfo?.email}}
    </div>
    <div class="mt-3"><button class="btn btn-primary btn-sm" @click="logout">Logout</button></div>
  </div>
</template>
<script>
export default {
  name: 'homeIndex',
  data() {
    return {
      userInfo: null
    }
  },
  mounted() {
    let me = this
    me.axios.get('/api/user')
      .then(res => {
        // console.log(res.data)
        me.userInfo = {name:res.data.name, email:res.data.email}
      }).catch(err => {
        // console.log(err)
        // me.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))

        // console.log(JSON.parse(JSON.stringify(me.errValidation)));
      })
  },
  methods: {
    logout() {
      let me = this
      me.axios.post('/api/logout')
      .then(res => {
        // console.log(res.data)
        me.$router.push({name: 'login'})
      })
    }
  },
}
</script>
<style lang="">
  
</style>
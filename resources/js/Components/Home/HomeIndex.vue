<template lang="">
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <i class="bi bi-caret-right-fill"></i> Profile
      </div>
      <div class="card-body">
        <p>Name: {{ userInfo?.name }}</p>
        <p>Email: {{ userInfo?.email }}</p>
      </div>
    </div>
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
        me.userInfo = { name: res.data.name, email: res.data.email }
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
          me.$router.push({ name: 'login' })
        })
    }
  },
}
</script>
<style lang="">
  
</style>
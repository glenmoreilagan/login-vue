<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand" to='/'>EXAM</router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">User</a> -->
            <router-link class="nav-link" to='/user'>User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/role'>Role</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
<script>
export default {
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
<style>
</style>
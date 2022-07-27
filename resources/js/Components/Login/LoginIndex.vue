<template lang="">
  <div class="main-div-login">
    <div class="login-form">
      <h4>Login to your account</h4>
      <label>Email</label>
      <input type="text" class="form-control" v-model="userInfo.email" />
      <p class="text-danger" v-if="errValidation?.email">
        {{ errValidation.email[0]}}
      </p>
      <label>Password</label>
      <input type="password" class="form-control" v-model="userInfo.password" />
      <p class="text-danger" v-if="errValidation?.password">
        {{ errValidation.password[0]}}
      </p>

      <button class="btn btn-primary mt-3 btnLogin" @click="login">Login</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data() {
    return {
      userInfo: {
        email: '',
        password: ''
      },
      errValidation: []
    }
  },
  methods: {
    login() {
      let me = this
      me.axios.post('/api/login', me.userInfo)
        .then(res => {
          if(res.status == 200) {
            me.$router.push({name: 'home'})
          }
        }).catch(err => {
          // console.log(err)
          me.errValidation = JSON.parse(JSON.stringify(err.response.data.errors))

          console.log(JSON.parse(JSON.stringify(me.errValidation)));
        })
      // this.$router.push('/user');
    }
  }
}
</script>
<style scoped>
.main-div-login {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #DEDEDE;
  padding: 1em;
  height: 100vh;
}

.login-form {
  width: 350px;
}

.btnLogin {
  width: 100px;
}
</style>
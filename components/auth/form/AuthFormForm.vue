<template>
  <a-form
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button" :loading="isLoading">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AuthFormComponent',
  middleware: 'authenticated',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.isLoading = true
          try {
            await this.$fire.auth.signInWithEmailAndPassword(
              values.email,
              values.password
            )
            await this.$router.replace('/')
          } catch (e) {
            alert(e)
            this.isLoading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  .login-form-button {
    width: 100%;
  }
}
</style>

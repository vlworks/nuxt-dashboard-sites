<template>
  <div>
    <h1>Welcome</h1>
    <a-button
      type="primary"
      @click="logout"
    >
      Logout
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
        await this.$router.push('/login')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

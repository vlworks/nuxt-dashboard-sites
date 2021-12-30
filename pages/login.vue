<template>
  <a-row class="flex-center-middle" type="flex" justify="center" align="middle">
    <a-col
      :xs="{ span: 22 }"
      :md="{ span: 10 }"
      :lg="{ span: 6 }"
    >
      <AuthFormForm />
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeCreate () {
    if (this.$store.getters['auth/isLoggedIn']) {
      this.$router.replace('/')
    }
  }
}
</script>

<style>
  .flex-center-middle {
    min-height: 100vh
  }
</style>

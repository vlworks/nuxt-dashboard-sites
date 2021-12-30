export default {

  async onAuthStateChanged ({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    if (authUser && authUser.getIdToken) {
      try {
        await authUser.getIdToken(true)
      } catch (e) {
      }
    }
    commit('SET_AUTH_USER', { authUser })
  }
}

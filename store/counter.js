export const state = () => ({
  value: 0
})

export const mutations = {
  increment (state) {
    state.value++
  },
  reset (state) {
    state.value = 0
  }
}

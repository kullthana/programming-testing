import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      numbers: [],
      employee: []
    }
  }
})

export default store

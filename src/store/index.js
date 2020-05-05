import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      menu:{
        active: false,
        title: 'Vue/Electron',
        width: '200px'
      },
      notify:{
        drawer: false,
        title: '',
        msg: '',
      },
      user:{ }
  },
  mutations: {
    setUser: (state, payload) => {
        if(payload === null){
          let str = localStorage.getItem("user-data")
          let userObj = JSON.parse(str)
          state.user = userObj;
        }else{
          state.user = payload.user;
        }      
    }
  },
  actions: {
  },
  modules: {
  }
})

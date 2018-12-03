import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  username:''
}
const mutations={
  getUsername:(state)=>{
    let username=JSON.parse(localStorage.getItem('user')).username
    state.username=username
  }
}
const getters={

}
export default new Vuex.Store({
  state,
  mutations,
  getters
})

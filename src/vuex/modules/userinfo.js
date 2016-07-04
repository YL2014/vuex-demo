import {
	SUCCESS_GET_USERINFO,
	FAILURE_GET_USERINFO
} from '../types'

const state = {
  userinfo: {}

}

const mutations = {
  [FAILURE_GET_USERINFO](state){
    state.userinfo = {}
  },
  [SUCCESS_GET_USERINFO](state,data){
    state.userinfo = data
  }
}

export default {
  state,
  mutations
}
import {
	ORDERS_SUCCESS_GET,
	ORDERS_FAILURE_GET,
  ORDERS_MORE_GET_EMPTY,
  ORDERS_SUCCESS_GET_MORE,
} from '../types'

const state = {
  list: [],
  showMoreBtn: false,
  showEmpty: false,
  pageindex: 1
}

const mutations = {

  [ORDERS_MORE_GET_EMPTY](state){
    state.showMoreBtn = false
  },

  [ORDERS_FAILURE_GET](state){
    state.list = []
    state.showMoreBtn = false
    state.showEmpty = true
  },

  [ORDERS_SUCCESS_GET_MORE](state,data){
    state.list = state.list.concat(data)
    state.pageindex++
    state.showMoreBtn = true
    state.showEmpty = false
  },

  [ORDERS_SUCCESS_GET](state,data){
    state.list = data
    state.pageindex = 2
    state.showMoreBtn = true
    state.showEmpty = false
  }

}

export default {
  state,
  mutations
}
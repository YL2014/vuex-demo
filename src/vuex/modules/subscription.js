import {
	SUCCESS_GET_SUBSCRIPTION,
	FAILURE_GET_SUBSCRIPTION,
    MORE_GET_EMPTY_SUBSCRIPTION,
    SUCCESS_GET_MORE_SUBSCRIPTION
} from '../types'

const state = {
  lists: [],
  showMoreBtn: false,
  showEmpty: false,
  pageindex: 1
}

const mutations = {

  [FAILURE_GET_SUBSCRIPTION](state){
    state.lists = []
    state.fenqilist = []
    state.showMoreBtn = false
    state.showEmpty = true
  },

  [MORE_GET_EMPTY_SUBSCRIPTION](state){
    state.showMoreBtn = false
  },

  [SUCCESS_GET_MORE_SUBSCRIPTION](state,data){
    data.forEach((item) => {
      item.img_url = 'http://www.yun2h.com' + item.img_url
    })
    state.lists = state.lists.concat(data)
    state.pageindex++
    state.showMoreBtn = true
  },

  [SUCCESS_GET_SUBSCRIPTION](state,data){
    data.forEach((item) => {
      item.img_url = 'http://www.yun2h.com' + item.img_url
    })
    state.lists = data
    state.pageindex = 2
    state.showMoreBtn = true
  }

}

export default {
  state,
  mutations
}
import {
	SUCCESS_GET_PRODUCT,
	FAILURE_GET_PRODUCT,
  MORE_GET_EMPTY_PRODUCT,
  SUCCESS_GET_MORE_PRODUCT
} from '../types'

const state = {
  lists: [],
  showMoreBtn: false,
  showEmpty: false,
  pageindex: 1
}

const mutations = {

  [FAILURE_GET_PRODUCT](state){
    state.lists = []
    state.showMoreBtn = false
    state.showEmpty = true
  },

  [MORE_GET_EMPTY_PRODUCT](state){
    state.showMoreBtn = false
  },

  [SUCCESS_GET_MORE_PRODUCT](state,data){
    data.forEach((item) => {
      item.img_url = 'http://www.yun2h.com' + item.img_url
    })
    state.lists = state.lists.concat(data)
    state.pageindex++
    state.showMoreBtn = true
  },

  [SUCCESS_GET_PRODUCT](state,data){
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
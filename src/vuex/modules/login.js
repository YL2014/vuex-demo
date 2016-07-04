import {
	SUCCESS_LOGIN,
	FAILURE_LOGIN,
  CHECK_FAILURE_LOGIN,
  INIT_CHECK_LOGIN
} from '../types'

const state = {
  session: '',
  errors: {
    errortip: '错误提示：手机号格式不正确，请重试!',
    errorbool: 'hidden'
  }
}

const mutations = {

  [CHECK_FAILURE_LOGIN](state, errorType){
    if(errorType == "invaildMobile"){
      state.errors.errortip = '错误提示：手机号格式不正确，请重试!'
    }else if(errorType == "invaildPassword"){
      state.errors.errortip = '错误提示：密码格式格式不正确，请重试!'
    }else{
      state.errors.errortip = '错误提示：手机号或密码错误，请重试!'
    }
    state.errors.errorbool = 'visible'
  },

  [INIT_CHECK_LOGIN] (state) {
    state.errors.errorbool = 'hidden'
  },

  [FAILURE_LOGIN](state){
    state.session = ''
  },

  [SUCCESS_LOGIN](state,data){
    state.session = data.SessionId
  }

}

export default {
  state,
  mutations
}
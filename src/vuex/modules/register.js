import {
	SUCCESS_REGISTER,
	FAILURE_REGISTER,
  CHECK_FAILURE_REGISTER,
  INIT_CHECK_REGISTER,
  CAN_GET_CODE,
  CANNOT_GET_CODE
} from '../types'

const state = {
  session: '',
  errors: {
    errortip: '错误提示：手机号格式不正确，请重试!',
    errorbool: 'hidden',
    getCodeBool: false,
    codeMsg: '点击发送',
    intervalNum: 60
  }
}

const mutations = {

  [CHECK_FAILURE_REGISTER](state, errorType){
    if(errorType == "invaildMobile"){
      state.errors.errortip = '错误提示：手机号为空或格式不正确，请检查!'
    }else if (errorType == "invaildPassword") {
      state.errors.errortip = '错误提示：密码为空或格式不正确，请检查!'
    }else if (errorType == "invaildCode") {
      state.errors.errortip = '错误提示：验证码为空或格式不正确，请检查!'
    }else{
      state.errors.errortip = '错误提示：短信验证码不正确，请重试!'
    }
    state.errors.errorbool = 'visible'
  },

  [CAN_GET_CODE](state){
    state.errors.getCodeBool = false
    state.errors.codeMsg = '点击发送'
    state.errors.intervalNum = 60
  },

  [CANNOT_GET_CODE](state, data){
    state.errors.getCodeBool = true
    state.errors.codeMsg = data + 's'
    state.errors.intervalNum = data
  },

  [INIT_CHECK_REGISTER] (state) {
    state.errors.errorbool = 'hidden'
  },

  [FAILURE_REGISTER](state){
    state.session = ''
  },

  [SUCCESS_REGISTER](state,data){
    state.session = data.SessionId
  }

}

export default {
  state,
  mutations
}
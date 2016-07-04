import api from '../api/index'
import * as types from './types'
import config from '../api/config'
import store from './store'
import regexp from '../utils/regexp'
import cookie from '../utils/cookie'
import dialog from '../utils/dialog'

/*登录前验证*/
export const initCheckLogin = ({dispatch}) => {
	dispatch(types.INIT_CHECK_LOGIN);
}

/*登录*/
export const userLogin = ({dispatch, router}, param) => {
	if(!regexp.mobile(param.mobile)){
		dispatch(types.CHECK_FAILURE_LOGIN, 'invaildMobile')
	}else if(!regexp.password(param.password)){
		dispatch(types.CHECK_FAILURE_LOGIN, 'invaildPassword')
	}else{
		if(cookie.get('openId')){
			param.openId = cookie.get('openId')
		}
		api.post({
			url: config.loginUrl,
			data: param,
			success (data) {
				dispatch(types.SUCCESS_LOGIN, data.data);
				cookie.set('session', data.data[0].SessionId, 1)
				router.go({path: '/app/user'})
			}
		})
	}
}
/*退出登录*/
export const userLogout = ({dispatch, router}) => {
  cookie.clear('session')
  router.go({path: '/login'})
}

/*注册前验证*/
export const initCheckRegister = ({dispatch}) => {
	dispatch(types.INIT_CHECK_REGISTER);
}

/*发送注册时的验证码*/
export const registerCode = ({dispatch}, param) => {
	if(!regexp.mobile(param.mobile)){
		dispatch(types.CHECK_FAILURE_REGISTER, 'invaildMobile');
	}else{
		let num = 60
		let timer = setInterval(() => {
			dispatch(types.CANNOT_GET_CODE, num)
			num--
			if(num < 0){
				clearInterval(timer)
				dispatch(types.CAN_GET_CODE)
			}
		}, 1000)
		api.post({
			url: config.sendsmsUrl,
			data: {
				types: 'reg',
				mobile: param.mobile
			},
			success (data) {}
		})
	}
}

/*注册*/
export const userRegister = ({dispatch, router}, param) => {
	if(!regexp.mobile(param.mobile)){
		dispatch(types.CHECK_FAILURE_REGISTER, 'invaildMobile');
	}else if(!regexp.password(param.password)){
		dispatch(types.CHECK_FAILURE_REGISTER, 'invaildPassword');
	}else if(!regexp.code(param.code)){
		dispatch(types.CHECK_FAILURE_REGISTER, 'invaildCode');
	}else{
		let paramObj = {
			site: "wx",
			mobile: param.mobile,
			password: param.password,
			smscode: param.code
		}
		if(param.referer != ""){
			paramObj.referer = param.referer
		}
		if(cookie.get('openId')){
			paramObj.openId = cookie.get('openId')
		}
		api.post({
			url: config.registerUrl,
			data: paramObj,
			success (data) {
				cookie.set('session', data.data[0].sessionId, 1)
				dialog.alert({
					content: data.ret_msg,
					callback () {
						router.go({path: '/app/user'})
					}
				})
			}
		})
	}
}

/*发送重置密码时的验证码*/
export const forgotCode = ({dispatch}, param) => {
	if(!regexp.mobile(param.mobile)){
		dispatch(types.CHECK_FAILURE_FORGOT, 'invaildMobile');
	}else{
		let num = 60
		let timer = setInterval(() => {
			dispatch(types.CANNOT_GET_CODE, num)
			num--
			if(num < 0){
				clearInterval(timer)
				dispatch(types.CAN_GET_CODE)
			}
		}, 1000)
		api.post({
			url: config.sendsmsUrl,
			data: {
				types: 'forgot',
				mobile: param.mobile
			},
			success (data) {}
		})
	}
}

/*重置密码前验证*/
export const initCheckForgot = ({dispatch}) => {
	dispatch(types.INIT_CHECK_FORGOT);
}

/*重置密码*/
export const userForgot = ({dispatch, router}, param) => {
	if(!regexp.mobile(param.mobile)){
		dispatch(types.CHECK_FAILURE_FORGOT, 'invaildMobile');
	}else if(!regexp.password(param.password)){
		dispatch(types.CHECK_FAILURE_FORGOT, 'invaildPassword');
	}else if(!regexp.code(param.code)){
		dispatch(types.CHECK_FAILURE_FORGOT, 'invaildCode');
	}else{
		let paramObj = {
			mobile: param.mobile,
			password: param.password,
			smscode: param.code
		}
		if(cookie.get('openId')){
			paramObj.openId = cookie.get('openId')
		}
		api.post({
			url: config.forgotUrl,
			data: paramObj,
			success (data) {
				
				dialog.alert({
					content: data.ret_msg,
					callback () {
						router.go({path: '/app/login'})
					}
				})
			}
		})
	}
}


/*获取用户信息*/
export const getUserInfo = ({dispatch, router}) => {
	let session = cookie.get('session')
	api.post({
		url: config.userInfoUrl,
		data: {sessionId: session},
		success (data) {
			dispatch(types.SUCCESS_GET_USERINFO, data.data[0]);
		}
	})
}
/*获取用户基本订单*/
export const getOrderList = ({dispatch}, param) => {
	let session = cookie.get('session')
	let pageindex = param.pageindex || 1
	api.post({
		url: config.ordersUrl,
		data: {
			sessionId: session,
			pageindex: pageindex,
			pagesize: param.pagesize || 5
		},
		success (data) {
			if(pageindex == 1){
				if(data.data.length == 0){
					dispatch(types.ORDERS_FAILURE_GET);
				}else{
					dispatch(types.ORDERS_SUCCESS_GET, data.data);
				}
			}else{
				if(data.data.length == 0){
					dispatch(types.ORDERS_MORE_GET_EMPTY);
				}else{
					dispatch(types.ORDERS_SUCCESS_GET_MORE, data.data);
				}
			}
		}
	})
}

/*首页获取商品列表*/
export const getProductList = ({dispatch}, param) => {
	let session = cookie.get('session')
	let pageindex = param.pageindex || 1
	api.get({
		url: config.productListUrl,
		data: {
			sessionId: session,
			pageindex: pageindex,
			pagesize: param.pagesize || 5
		},
		success (data) {
			if(pageindex == 1){
				if(data.data.length == 0){
					dispatch(types.FAILURE_GET_PRODUCT);
				}else{
					dispatch(types.SUCCESS_GET_PRODUCT, data.data);
				}
			}else{
				if(data.data.length == 0){
					dispatch(types.MORE_GET_EMPTY_PRODUCT);
				}else{
					dispatch(types.SUCCESS_GET_MORE_PRODUCT, data.data);
				}
			}
		}
	})
}

/*获取认购列表*/
export const getSubscriptionList = ({dispatch}, param) => {
	let session = cookie.get('session')
	let pageindex = param.pageindex || 1
	api.get({
		url: config.subscripttionUrl,
		data: {
			sessionId: session,
			pageindex: pageindex,
			pagesize: param.pagesize || 5
		},
		success (data) {
			if(pageindex == 1){
				if(data.data.length == 0){
					dispatch(types.FAILURE_GET_SUBSCRIPTION);
				}else{
					dispatch(types.SUCCESS_GET_SUBSCRIPTION, data.data);
				}
			}else{
				if(data.data.length == 0){
					dispatch(types.MORE_GET_EMPTY_SUBSCRIPTION);
				}else{
					dispatch(types.SUCCESS_GET_MORE_SUBSCRIPTION, data.data);
				}
			}
		}
	})
}
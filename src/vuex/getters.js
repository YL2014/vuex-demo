/*export function getLoadingStatus (state) {
  return state.interval.loading
}*/

export function getSession (state) {
	return state.login.session
}
/*获取登录验证错误信息*/
export function getLoginCheck (state) {
	return state.login.errors
}
/*获取注册验证错误信息*/
export function getRegisterCheck (state) {
	return state.register.errors
}
/*获取重置密码时错误信息*/
export function getForgotCheck (state) {
	return state.forgot.errors
}
/*获取用户信息*/
export function userInfo (state) {
	return state.userinfo.userinfo
}
/*获取用户订单信息，包括空显示，列表，页码*/
export function orderInfo (state) {
	return state.orderlist
}
/*获取首页商品列表信息，包括空显示，列表，页码*/
export function productInfo (state) {
	return state.home
}
/*获取认购列表信息，包括空显示，列表，页码*/
export function subscriptionInfo (state) {
	return state.subscription
}
/*正则验证相关
*create by yl 2016/5/19
*/

export default {
	/*手机号*/
	mobile (num) {
		return /^1[34578][0-9]{9}$/.test(num)
	},
	/*座机号码*/
	phone (num) {
		return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}$/.test(num)
	},
	/*邮箱*/
	email (str) {
		return /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str)
	},
	/*身份证*/
	idCard (str) {
		return /(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(str)
	},
	/*整数*/
	intNum (num) {
		return /(^[0-9]*$)/.test(num)
	},
	/*整数或小数*/
	intOrFloatNum (str) {
		return /^[0-9]+(\.[0-9]+)?$/.test(str)
	},
	/*至少包含2种字符的6到16位密码*/
	password (str) {
		return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/.test(str)
	},
	/*5位数字验证码*/
	code (num) {
		return /^\d{5}$/.test(num)
	}

}
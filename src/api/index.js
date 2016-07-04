import Vue from 'vue'
import Resource from 'vue-resource'
import Dialog from '../utils/dialog'
// import config from './config'
// import cookie from '../utils/cookie'

Vue.use(Resource)

if(process.env.NODE_ENV === 'production'){
	var baseUrl = 'http://api.yun2h.com'
}else{
	var baseUrl = 'http://api.yun2h.com'
}

export default {
	get (option) {
		ajax('get', option);
	},

	post (option) {
		ajax('post', option);
	}
}

function ajax (type, option) {
	Vue.http[type](baseUrl + option.url,  option.data || {}, {
		headers: option.headers || {
	        //"Content-Type": 'application/json'
	        //"X-Requested-With": "XMLHttpRequest"
        },
        emulateJSON: true
        // params: option.data || {}
	})
	.then((response) =>{
		if(response.ok){
			if(response.data.ret_code == 0){
				option.success(response.data)
			}else if(response.data.ret_code == '-1003' || response.data.ret_code == '-1011'){
				if(location.port == '80'){
					window.location.href = location.protocol + '//' + location.hostname + '/#!/login'
				}else{
					window.location.href = location.protocol + '//' + location.hostname + ':' + location.port + '/#!/login'
				}
				/*Dialog.alert({
					content: response.data.ret_msg,
					callback: function(){
						window.location.href = location.protocol + '//' + location.hostname + '/#!/login'
					}
				})*/
			}else{
				Dialog.showTip(response.data.ret_msg)
			}
		}
	}, (response) => {
		if(option.error){
			option.error()
		}else{
			Dialog.showTip('网络错误，请稍后再试!');
		}
	});
}
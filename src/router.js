import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'
import SubApp from './components/SubApp.vue'
import User from './components/User.vue'
import Home from './components/Home.vue'
import Transfer from './components/Transfer.vue'
import QRCode from './components/QRCode.vue' //我的二维码
import Subscription from './components/Subscription.vue' //认购
import SubscriptionDetail from './components/SubscriptionDetail.vue' //认购详情
import FenqiDetail from './components/FenqiDetail.vue' //分期详情
import ProductDetail from './components/ProductDetail.vue' //首页产品详情
import Introduce from './components/Introduce.vue' //云海黄简介
import Dream from './components/Dream.vue' //云海黄的梦
import GrowingUp from './components/GrowingUp.vue' //百年海黄成长记
import Value from './components/Value.vue' //黄花梨的价值
import Problem from './components/Problem.vue' //常见问题
import News from './components/News.vue' //平台公告
import CommonSense from './components/CommonSense.vue' //海黄常识

import cookie from './utils/cookie'
import dialog from './utils/dialog'
import api from './api/index'
import config from './api/config'


export default function (router) {
	router.map({
		'/login': {
			component: Login
		},
		'/register': {
			component: Register
		},
		'/forgot': {
			component: Forgot
		},
		'/app': {
		    component: SubApp,
		    subRoutes: {
		    	'/home': {
		    		component: Home,
		    		name: 'home'
		    	},
		    	'/user': {
		    		component: User,
		    		name: 'user'
		    	},
		    	'/qrcode/:code':{
		    		component: QRCode,
		    		name: 'qrcode'
		    	},
		    	'subscription': {
		    		component: Subscription
		    	},
		    	'transfer': {
		    		component: Transfer
		    	}
		    }
		},
		'/productdetail/:id': {
			component: ProductDetail,
			name: 'productdetail'
		},
		'/subscriptiondetail/:id': {
			component: SubscriptionDetail,
			name: 'subscriptiondetail'
		},
		'/fenqidetail/:id': {
			component: FenqiDetail,
			name: 'fenqidetail'
		},
		'/introduce': {
			component: Introduce
		},
		'/dream': {
			component: Dream
		},
		'growingup': {
			component: GrowingUp
		},
		'value': {
			component: Value
		},
		'problem': {
			component: Problem
		},
		'news': {
			component: News
		},
		'commonsense': {
			component: CommonSense
		}
	})

	router.beforeEach(function ({to, next}) {
		if(to.name == 'home'){
			if(to.query.openid){
				cookie.set('openId', to.query.openid, 24)
				api.get({
					url: config.checkUserSignUrl,
					data: {
						openId: to.query.openid
					},
					success (data) {
						cookie.set('session', data.data[0]['sessionId'], 1)
						next()
					}
				})
			}
		}
		if(to.name == 'user'){
			if(cookie.get('session')){
				next()
			}else{
				dialog.alert({
					content: '请登录后再试!',
					callback: function(){
						router.go({path: '/login'});
					}
				});
			}
		}else{
			next()
		}
	})
}
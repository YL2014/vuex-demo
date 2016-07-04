<template>
	<div class="view-login" v-show="login">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			云海黄登录
		</header>
		<div class="logo">
			<img src="/static/img/logo.png">
		</div>
		<div class="login-form">
			<div>
				<input type="tel" v-model="mobile" placeholder="请输入手机号" @input="setLoginBool">
			</div>
			<div>
				<input type="password" v-model="password" placeholder="密码至少包含两种字符，长度为6-16位" @input="setLoginBool">
			</div>
			<div class="error-tip" :style="{visibility: errors.errorbool}">
				{{errors.errortip}}
			</div>
			<div class="btn-cont">
				<a href="javascript:void(0);" disabled="{{loginBool}}" @click="emitLogin">登录</a>
			</div>
			<div class="account-cont">
			<div>
				<a href="javascript:void(0);" v-link="{ path: '/forgot' }">忘记密码？</a>
				<a href="javascript:void(0);" v-link="{ path: '/register' }">注册账号</a>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import { getLoginCheck } from '../vuex/getters'
import { userLogin, initCheckLogin } from '../vuex/action'
export default {
	name: 'Login',
	data () {
		return {
			login: {},
			mobile: '',
			password: '',
			loginBool: true
		}
	},
	vuex: {
		getters: {
			errors: getLoginCheck
		},
		actions: {
			userLogin: userLogin,
			initCheckLogin: initCheckLogin
		}
	},
	methods: {
		setLoginBool () {
			this.initCheckLogin();
			if(this.mobile.trim() && this.password.trim()){
				this.loginBool = false;
			}else{
				this.loginBool = true;
			}
		},
		emitLogin () {
			if(!this.loginBool){
				this.userLogin({
					mobile: this.mobile,
					password: this.password
				})
			}
		}
	}
}
</script>
<style lang="sass">
@import "../assets/base.scss";
.view-login{
	header{
		position: relative;
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #c0a877;
		color: #fff;
		text-align:center;
		@include font-dpr(16px);
		.back{
			position:absolute;
			left: 0.3125rem;
			top: 0.28125rem;
			width: 0.6875rem;
			height: 0.6875rem;
			img{
				position: absolute;
				top:0;
				left:0;
				width: 100%;
			}
		}
	}
	.logo{
		margin-top: 0.9375rem;
		margin-bottom: 0.9375rem;
		text-align: center;
		img{
			width: 6.984375rem;
		}
	}
	.login-form{
		div{
			padding-left: 0.390625rem;
			padding-right: 0.390625rem;
			input{
				height: 1.25rem;
				width: 100%;
				padding-left: 0.3125rem;
				margin-bottom: 0.3125rem;
				box-sizing: border-box;
				background-color: #fff;
				color: #2a2a2a;
				@include font-dpr(12px);
				border: 1px solid #d7d7d7;
				border-radius: 6px;
			}
			input::-webkit-input-placeholder{
				color:#cccccc;
			}
		}
		div.error-tip{
			color: #f23030;
			@include font-dpr(10px);
			visibility: hidden;
		}
		div.btn-cont{
			margin-top: 0.53125rem;
			margin-bottom: 0.9375rem;
			a{
				display: block;
				height: 1.25rem;
				line-height: 1.25rem;
				width: 100%;
				text-align: center;
				@include font-dpr(14px);
				background-color: #c0a877;
				color: #fff;
				border-radius: 6px;
			}
			a[disabled]{
				background-color: #eeeeee;
				color: #999999;
			}
		}
		div.account-cont{
			div{
				width: 100%;
				box-sizing: border-box;
				overflow: hidden;
				a{
					padding-left: 0.625rem;
					padding-bottom: 0.078125rem;
					color: #999999;
					@include font-dpr(14px);
				}
				a:first-child{
					float:left;
					background: url(/static/img/forgetpassword.png) 0 0.0625rem no-repeat;
					background-size: 0.375rem 0.4375rem;
				}
				a:last-child{
					float:right;
					background: url(/static/img/sign.png) 0 0.0625rem no-repeat;
					background-size: 0.34375rem 0.4375rem;
				}
			}
		}
	}

}
</style>
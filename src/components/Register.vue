<template>
	<div class="view-register" v-show="register">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back()">
				<img src="/static/img/back.png">
			</a>
			云海黄注册
		</header>
		<div class="logo">
			<img src="/static/img/logo.png">
		</div>
		<div class="login-form">
			<div>
				<input class="mobile" type="tel" v-model="mobile" placeholder="请输入手机号" @input="setRegisterBool">
			</div>
			<div class="code-cont">
				<input class="code" type="number" v-model="code" placeholder="请输入短信验证码" @input="setRegisterBool">
				<a href="javascript:void(0);" disabled="{{errors.getCodeBool}}" @click="getCode">{{errors.codeMsg}}</a>
			</div>
			<div>
				<input class="password" type="password" v-model="password" placeholder="密码至少包含两种字符，长度为6-16位" @input="setRegisterBool">
			</div>
			<div class="error-tip" :style="{visibility: errors.errorbool}">
				{{errors.errortip}}
			</div>
			<div class="btn-cont">
				<a href="javascript:void(0);" disabled="{{registerBool}}" @click="emitRegister">注册</a>
			</div>
			<div>
				点击"注册",即表示您同意并遵守<a target="_blank" href="http://yun2h.com/agreement.html">云海黄用户协议</a>和隐私政策
			</div>
		</div>
	</div>
</template>

<script>
import { getRegisterCheck } from '../vuex/getters'
import { userRegister, initCheckRegister, registerCode } from '../vuex/action'
export default {
	name: 'Register',
	data () {
		return {
			register: {},
			mobile: '',
			password: '',
			code: '',
			registerBool: true,
			referer: ''
		}
	},
	vuex: {
		getters: {
			errors: getRegisterCheck
		},
		actions: {
			registerCode: registerCode,
			userRegister: userRegister,
			initCheckRegister: initCheckRegister
		}
	},
	route: {
		data ({to}) {
			if(to.query.referer){
				this.referer = to.query.referer
			}
		}
	},
	methods: {
		setRegisterBool () {
			this.initCheckRegister();
			if(this.mobile.trim() && this.password.trim() && this.code.trim()){
				this.registerBool = false;
			}else{
				this.registerBool = true;
			}
		},
		getCode () {
			this.registerCode({
				mobile:this.mobile,
				code: this.code
			});
		},
		emitRegister () {
			if(!this.registerBool){
				this.userRegister({
					mobile: this.mobile,
					password: this.password,
					code: this.code,
					referer: this.referer
				})
			}
		}
	}
}
</script>
<style lang="sass">
@import "../assets/base.scss";
.view-register{
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
				padding-left: 0.3125rem;
				margin-bottom: 0.3125rem;
				box-sizing: border-box;
				background-color: #fff;
				color: #2a2a2a;
				@include font-dpr(12px);
				border: 1px solid #d7d7d7;
				border-radius: 6px;
			}
			input.mobile,
			input.password{
				width: 100%;
			}
			input.code{
				display:inline-block;
				width: 5.3125rem;
				margin-right: 0.234375rem;
			}
			input::-webkit-input-placeholder{
				color:#cccccc;
			}
		}
		div.code-cont{
			overflow:hidden;
			a{
				float:right;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
				width:3.671875rem;
				background-color:#c0a877;
				border-radius: 6px;
				color: #ffffff;
				@include font-dpr(14px);
			}
			a[disabled]{
				background-color: #eeeeee;
				color: #999999;
			}
		}
		div.error-tip{
			color: #f23030;
			@include font-dpr(10px);
			visibility: hidden;
		}
		div.btn-cont{
			margin-top: 0.53125rem;
			margin-bottom: 0.3125rem;
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
		div:last-child{
			@include font-dpr(10px);
			color: #616161;
			a{
				color: #f23030;
			}
		}
	}

}
</style>
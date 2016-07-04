<!-- app底部导航 -->
<template>
	<div class="nav-footer">
		<a v-for="item in navList" :class="{'active': $index==activeItem}" v-link="{ path: item.path }" @click="changeRoute($index)">
			<!-- <div> -->
				<img :src="item.picSrc">
			<!-- </div> -->
			<p>{{item.text}}</p>
		</a>
	</div>
</template>
<script>
	export default {
		name: 'NavFooter',
		data () {
			return {
				activeItem: 3,
				navList: [
					{
						picSrc: '/static/img/home.png',
						picBlank: '/static/img/home.png',
						picFill: '/static/img/home-fill.png',
						text: '首页',
						path: '/app/home'
					},
					{
						picSrc: '/static/img/cart.png',
						picBlank: '/static/img/cart.png',
						picFill: '/static/img/cart-fill.png',
						text: '认购',
						path: '/app/subscription'
					},
					{
						picSrc: '/static/img/transfer.png',
						picBlank: '/static/img/transfer.png',
						picFill: '/static/img/transfer-fill.png',
						text: '转让',
						path: '/app/transfer'
					},
					{
						picSrc: '/static/img/my-fill.png',
						picBlank: '/static/img/my.png',
						picFill: '/static/img/my-fill.png',
						text: '我的',
						path: '/app/user'
					}
				]
			}
		},
		created () {
			let currentUrl = location.href
			if(/app\/home/.test(currentUrl)){
				this.changeRoute(0)
			}else if(/app\/user/.test(currentUrl)){
				this.changeRoute(3)
			}else if(/app\/subscription/.test(currentUrl)){
				this.changeRoute(1)
			}else{
				this.changeRoute(2)
			}
		},
		methods: {
			changeRoute (num) {
				this.activeItem = num
				this.navList.forEach((item, index) => {
					if(index == num){
						item.picSrc = item.picFill
					}else{
						item.picSrc = item.picBlank
					}
				})
			}
		}
	}
</script>
<style lang="sass">
@import "../assets/base.scss";
.nav-footer{
	// height: 1.40625rem;
	width: 100%;
	padding-top: 0.15625rem;
	padding-bottom: 0.125rem;
    position: fixed;
    bottom: 0;
	display: flex;
	display: -webkit-flex;
	flex-flow: row nowrap;
	-webkit-flex-flow: row nowrap;
	justify-content: space-around;
	-webkit-justify-content: space-around;
	background-color: #fff;
	color: #c0a877;
	text-align:center;
	border-top: 1px solid #f0f0f0;
	a{
		color: #c0a877;
		font-size: 0;
		img{
			width: 0.6875rem;
			padding-bottom: 0.125rem;
		}
		p{
			@include font-dpr(10px);
			@include line-h(14px);
		}
	}
	a.active{
		color: #570300;
	}
}
</style>
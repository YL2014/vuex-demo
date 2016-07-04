<template>
	<div class="home-swip">
		<swiper :list="list" auto height="3.625rem"></swiper>
	</div>
</template>

<script>
import Swiper from 'vux/components/swiper'
import SwiperItem from 'vux/components/swiper-item'
export default {
	name: 'HomeSlider',
	components: {
		Swiper,
		SwiperItem
	},
	data () {
		return {
			list: [{
				img: '/static/img/banner1.jpg',
				url: '/#!/growingup'
			},{
				img: '/static/img/banner2.jpg',
				url: '/#!/dream'
			},{
				img: '/static/img/banner3.jpg',
				url: '/#!/value'
			},{
				img: '/static/img/banner4.jpg',
				url: '/#!/commonsense'
			}]
		}
	}
}
</script>

<style lang="sass">
	 @import '~vux/vux.css';
	 body{
	 	font-family: "微软雅黑",sans-serif,Helvetica Neue,Helvetica,Arial;
	 }
	 .home-swip{
	 	width: 100%;
	 	height: 3.625rem;
	 	.indicator{
	 		right: 3.945312rem;
	 		bottom: 0.15625rem;
	 		a{
	 			margin-left: 0.125rem;
	 			.icon_dot{
	 				display: inline-block;
				    vertical-align: middle;
				    width: 0.46875rem;
				    height: 0.078125rem;
				    border-radius: 0;
				    background-color: #b29d6e;
	 			}
	 			.icon_dot.active{
	 				background-color: #570300;
	 			}
	 		}
	 	}
	 }
	 .swiper .item .desc{
	 	background-image:none;
	 }
</style>
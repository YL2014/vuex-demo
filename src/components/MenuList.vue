<template>
	<div class="menulist-view" v-show="show">
		<div class="mask" @click="hideMenu"></div>
		<ul>
			<li v-for="item in list" @click="hideMenu">
				<a href="javascript:;" v-link="{path: item.url}">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		show: {
	      type: Boolean,
	      default: false
	    }
	},
	data () {
		return {
			list: [
				{
					url: '/introduce',
					title: '云海黄简介'
				},{
					url: '/value',
					title: '云海黄价值'
				},{
					url: '/growingup',
					title: '百年海黄成长记'
				},{
					url: '/commonsense',
					title: '海黄常识'
				},{
					url: '/dream',
					title: '海黄的梦'
				}
			]
		}
	},
	methods: {
		hideMenu () {
			this.show = false
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.menulist-view{
	height: 100%;
	width: 100%;
	position: fixed;
	top: 1.25rem;
	left: 0;
	.mask{
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.5;
		position: absolute;
	}
	ul{
		width: 100%;
		background: #ffffff;
		position: absolute;
		li{
			padding-left: 0.3125rem;
			height: 0.9375rem;
			line-height: 0.9375rem;
			@include font-dpr(14px);
			a{
				color: #333333;
			}
			.v-link-active{
				color: #c0a877;
			}
		}
	}
}
</style>
<template>
	<div class="introduce-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			云海黄简介
			<a class="tab" href="javascript:void(0)" @click="showMenuList">
				<img src="/static/img/list2.png">
			</a>
		</header>
		<div class="top-pic">
			<img src="/static/img/jianjie/synopsis-ad.jpg">
		</div>
		<h2 class="title">云海黄简介</h2>
		<div class="block">
			<h4>什么是云海黄</h4>
			<p>海南黄花梨简称“海黄”，云海黄是指基于互联网的便捷性而展开的购买、转让、赠予、变现等业务的黄花梨活体植株交易平台。</p>
		</div>
		<div class="block">
			<h4>我们要做什么</h4>
			<p>云海黄项目依托于海南三亚、保亭、乐东等地三万余亩繁育种植基地精心培育并用心守护海黄成长。每株海黄树均配备唯一识别码和地理坐标，通过云海黄活体植株交易平台，从而实现海黄各个生长阶段的活体植株转让，让种植产生财富，让交易产生价值。我们将着力保护黄花梨为代表的海南珍稀树种，创建万亩百年黄花梨盛景，同时亦展开海南岛丰富的热带水果，使之进入寻常百姓家。</p>
			<div class="do-what-pic">
				<img src="/static/img/jianjie/synopsis1.jpg">
				<img src="/static/img/jianjie/synopsis2.jpg">
				<img src="/static/img/jianjie/synopsis3.jpg">
				<img src="/static/img/jianjie/synopsis4.jpg">
			</div>
		</div>
		<div class="block">
			<h4>我们提供什么服务</h4>
			<p>云海黄平台根据培育种植情况定期发行出售海黄树，投资人可通过三策林业认购各树龄段的海黄。认购后，投资人有权处置已认购海黄：①持续增值；②转让他人；③净值借款；④赠予亲友；⑤砍伐加工。投资人所认购海黄树由三策林业统一维护管理，10年树龄内免维护费用，之后每年需向管理方缴纳定额维护管理费。</p>
			<div class="for-what-pic">
				<img src="/static/img/jianjie/synopsis-head.png">
			</div>
		</div>
		<h2 class="title">使命愿景</h2>
		<div class="shiming-cont">
			<div>
				<p>我们的使命</p>
				<p>打造万亩海黄种植地</p>
				<p>让种植生长财富</p>
				<p>护卫万亩海南珍品树</p>
				<p>使热带水果寻常</p>
			</div>
			<div>
				<p>我们的愿景</p>
				<p>为人类留存百年海黄老树</p>
				<p>为人间展现万亩海黄盛景</p>
			</div>
			<div>
				<p>我们的资质</p>
				<img src="/static/img/jianjie/license.jpg">
			</div>
		</div>
		<h2 class="title">云海黄实景</h2>
		<div class="shijing-cont">
			<div class="tab-cont">
				<div v-for="item in shijing" :class="item.class" @click="changeItem($index)">
					<img :src="item.pic">
					<p v-text="item.title"></p>
					<div>
						<img v-show="item.class" src="/static/img/jianjie/uparrow.png">
					</div>
				</div>
			</div>
			<div class="shijingImgActive-cont">
				<img :src="shijingImgActive">
			</div>
		</div>
		<content-footer></content-footer>
		<menu-list :show.sync="showMenu"></menu-list>
	</div>
</template>

<script>
import ContentFooter from './ContentFooter.vue'
import MenuList from './MenuList.vue'
export default {
	data () {
		return {
			shijing: [
				{
					class: 'active',
					pic: '/static/img/jianjie/synopsis-icon11.png',
					picFill: '/static/img/jianjie/synopsis-icon11.png',
					picBlank: '/static/img/jianjie/synopsis-icon11-grey.png',
					title: '海黄基地'
				},{
					class: '',
					pic: '/static/img/jianjie/synopsis-icon22-grey.png',
					picFill: '/static/img/jianjie/synopsis-icon22.png',
					picBlank: '/static/img/jianjie/synopsis-icon22-grey.png',
					title: '基地实景色'
				},{
					class: '',
					pic: '/static/img/jianjie/synopsis-icon32-grey.png',
					picFill: '/static/img/jianjie/synopsis-icon32.png',
					picBlank: '/static/img/jianjie/synopsis-icon32-grey.png',
					title: '海黄农场'
				}
			],
			shijingImg: [
				'/static/img/jianjie/introduce-content.jpg',
				'/static/img/jianjie/introduce-content2.jpg',
				'/static/img/jianjie/introduce-content3.jpg'
			],
			shijingImgActive: '/static/img/jianjie/introduce-content.jpg',
			showMenu: false
		}
	},
	components: {
	    ContentFooter,
	    MenuList
	},
	methods: {
		changeItem (num) {
			this.shijing.forEach((item, index) => {
				if(index != num){
					item.pic = item.picBlank
					item.class = ''
				}else{
					item.pic = item.picFill
					item.class='active'
				}
			})
			this.shijingImgActive = this.shijingImg[num]
		},
		showMenuList () {
			 this.showMenu = !this.showMenu
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.introduce-view{
	@include common-head();
	.top-pic{
		width: 100%;
		img{
			width: 100%;
			vertical-align: middle;
		}
	}
	h2.title{
		margin-top: 0.78125rem;
		@include font-dpr(16px);
		@include line-h(18px);
		color: #570300;
		text-align: center;
	}
	.block{
		margin-top: 0.46875rem;
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		padding-bottom: 0.46875rem;
		border-bottom: 1px solid #dfe1e5;
		h4{
			padding-bottom: 0.3125rem;
			color: #c0a877;
			@include font-dpr(15px);
			@include line-h(18px);

		}
		p{
			color: #2a2a2a;
			@include font-dpr(14px);
			@include line-h(20px);
		}
		div{
			margin-top: 0.3125rem;
		}
		div.do-what-pic{
			img{
				width: 4.609375rem;
			}
		}
		div.for-what-pic{
			img{
				width: 100%;
			}
		}
	}
	.shiming-cont{
		margin-top: 0.46875rem;
		padding-bottom: 0.46875rem;
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		border-bottom: 1px solid #dbdee4;
		overflow: hidden;
		div{
			float:left;
			padding-top: 0.3125rem;
			border: 1px solid #dbdee4;
			box-sizing: border-box;
			p{
				color: #8a8a8a;
				@include font-dpr(12px);
				@include line-h(15px);
				text-align: center;
			}
			p:first-child{
				color: #c0a877;
				@include font-dpr(13px);
				@include line-h(16px);
				padding-bottom: 0.25rem;
			}
		}
		div:nth-child(1), div:nth-child(2){
			width: 4.609375rem;
			height: 2.8125rem;
		}
		div:nth-child(2){
			margin-left: 0.15625rem;
		}
		div:nth-child(3){
			width: 100%;
			margin-top: 0.15625rem;
			text-align: center;
			img{
				width: 7.65625rem;
			}
		}
	}
	.shijing-cont{
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		.tab-cont{
			overflow: hidden;
			margin-top: 0.46875rem;
			margin-bottom: 0.234375rem;
			div{
				position: relative;
				float: left;
				padding: 0.3125rem 0;
				width: 2.96875rem;
				border: 1px solid #dbdee4;
				text-align: center;
				box-sizing: border-box;
				img{
					width: 2.34375rem;
				}
				div{
					position:absolute;
					width: 100%;
					padding: 0;
					border: 0;
					float: none;
					height: auto;
					bottom:-1px;
					text-align: center;
					font-size: 0;
					img{
						width: 0.25rem;
					}
				}
			}
			div:nth-child(1),div:nth-child(2){
				margin-right: 0.234375rem;
			}
		}
		.shijingImgActive-cont{
			width: 100%;
			img{
				width: 100%;
			}
			
		}
		.active{
			color: #c0a877;
		}
	}
}
</style>
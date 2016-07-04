<template>
	<div class="dream-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			云海黄的梦
			<a class="tab" href="javascript:void(0)" @click="showMenuList">
				<img src="/static/img/list2.png">
			</a>
		</header>
		<div class="top-pic">
			<img src="/static/img/dream/dream-ad.jpg">
		</div>
		<div class="img-cont">
			<div>
				<img src="/static/img/dream/dream1.jpg">
				<p>孩子同财富相伴随，共同成长</p>
			</div>
			<div>
				<img src="/static/img/dream/dream2.jpg">
				<p>家族信物-见证历史，未来和梦想</p>
			</div>
			<div>
				<img src="/static/img/dream/dream3.jpg">
				<p>纵享财富增值带来的美好生活</p>
			</div>
			<div>
				<img src="/static/img/dream/dream4.jpg">
				<p>云海黄-互联网海黄种植第一品牌</p>
			</div>
		</div>
		<div class="note-cont">
			<h2>认购云海黄，可实现</h2>
			<h4>种植梦想</h4>
			<p>海黄，陪伴您共度悠然时光，留下岁月足迹，海黄的每一次破土萌芽、每一次开花结果，都是梦想的开始，是希望的延续......</p>
			<h4>文化传承</h4>
			<p>漫长时光浸染，海黄木性深固，醇香沉雅气质留存，植株活体见证岁月弥厚沧桑，木制器物承载文化精髓回荡，世间无双。</p>
			<h4>财富增值</h4>
			<p>除却无可比拟的文化价值，海黄的市场经济价值也呈逐年递增趋势。据当前市场价格估值，1年新树长成10年树，价值增加1500%，成长为20年树，价值增加15000%。</p>
		</div>
		<content-footer></content-footer>
		<menu-list :show.sync="showMenu"></menu-list>
	</div>
</template>

<script>
import ContentFooter from './ContentFooter.vue'
import MenuList from './MenuList.vue'
export default {
	components: {
	    ContentFooter,
	    MenuList
	},
	data () {
		return {
			showMenu: false
		}
	},
	methods: {
		showMenuList () {
			 this.showMenu = !this.showMenu
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.dream-view{
	@include common-head();
	.top-pic{
		width: 100%;
		img{
			width: 100%;
			vertical-align: middle;
		}
	}
	.img-cont{
		font-size: 0;
		padding-top: 0.15625rem;
		div:nth-child(1){
			display: inline-block;
			width: 4.921875rem;
			margin-right: 0.15625rem;
		}
		div:nth-child(2){
			display:inline-block;
			width: 4.921875rem;
		}
		div:nth-child(3), div:nth-child(4){
			width: 100%;
			margin-top: 0.15625rem;
		}
		div{
			position: relative;
			img{
				width: 100%;
			}
			p{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 0.875rem;
				line-height: 0.875rem;
				background-color: #570300;
				opacity: 0.46;
				color: #ffffff;
				@include font-dpr(10px);
				text-align: center;
			}
		}
	}
	.note-cont{
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		margin-bottom: 0.46875rem;
		background-color: #f7f7f7;
		h2{
			padding-top: 0.78125rem;
			margin-bottom: 0.46875rem;
			color: #570300;
			text-align:center;
			@include font-dpr(16px);
			@include line-h(18px);
		}
		h4{
			padding-top:0.46875rem;
			padding-bottom:0.3125rem;
			color: #c0a877;
			text-align: center;
			@include font-dpr(15px);
			@include line-h(16px);
		}
		p{
			padding-bottom: 0.46875rem;
			color: #2a2a2a;
			@include font-dpr(14px);
			@include line-h(20px);
		}
	}
}
</style>
<template>
	<div class="growingup-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			百年海黄成长记
			<a class="tab" href="javascript:void(0)" @click="showMenuList">
				<img src="/static/img/list2.png">
			</a>
		</header>
		<div class="block block1">
			<h2>种子篇</h2>
			<h4>万般挑选 择全岛之良种</h4>
			<div class="info-cont">
				<p>云海黄的培育工程师们寻遍海南省各处有海黄生长的土地，挑选状态最为优良的百年大树，获取每一棵树的历史及现状数据，优中择优，在秋天收集被秋风自然吹落的树仔。再通过现代科学选种方法筛选，并应用遗传统计学进行长达两年的试种实验，最终获得全海南最优秀的海黄品种及其种子。</p>

			</div>
			<div class="img-cont">
				<img src="/static/img/growingup/growup1.png">
			</div>
		</div>
		<div class="block block2">
			<h2>树苗篇</h2>
			<h4>标准化育苗 精准环境控制</h4>
			<div class="img-cont">
				<img src="/static/img/growingup/growup2.png">
			</div>
			<div class="info-cont">
				<p>一颗颗种子来之不易，工程师们在将这些种子孕育成幼苗的过程中丝毫不敢怠慢，巨资引入只有大型科研机构才有配备的温光湿环境精准控制系统，以保证育苗过程的万无一失，让每一棵海黄不输在起跑线上。</p>
			</div>
			<p class="block2-p">
				树苗培育成功后，按照事先规划好的种植坐标进行规模化种植，埋入含有特制底肥的土壤以呵护幼苗的发育，并定时浇水施肥。幼苗长高一些后，工程师们会为每一株幼苗打造防风装置。在种植工程师们的细心呵护下，很快，海黄幼苗就会成长为一棵棵健壮的小海黄树。
			</p>
		</div>
		<div class="block block3">
			<h2>小树篇</h2>
			<h4>顶级园艺团队 科学统一管理</h4>
			<div class="info-cont">
				<p>云海黄拥有国内最大的海黄树养护团队，应用标准化规模化的种植技术，全天候守护海黄树的健康成长。平台售出的每一棵海黄树，都要经过六道检测工序，不合格的树被及时淘汰，以保证售出的每一棵海黄树都十分优秀。</p>
			</div>
			<div class="img-cont">
				<img src="/static/img/growingup/growup3.png">
			</div>
		</div>
		<div class="block block4">
			<h2>大树篇</h2>
			<h4>军事级安全防护 百年大树可期</h4>
		</div>
		<div class="cont">
			<p>云海黄拥有国内最大的海黄树养护团队，应用标准化规模化的种植技术，全天候守护海黄树的健康成长。平台售出的每一棵海黄树，都要经过六道检测工序，不合格的树被及时淘汰，以保证售出的每一棵海黄树都十分优秀。</p>
			<img src="/static/img/growingup/growup4.jpg">
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
.growingup-view{
	@include common-head();
	.block:nth-child(even){
		padding-left: 0.3125rem;
		background-color: #f7f7f7;
		h2,h4{
			text-align: left;
		}
	}
	.block:nth-child(odd){
		padding-right: 0.3125rem;
		h2,h4{
			text-align: right;
		}
	}
	.block{
		overflow: hidden;
		padding-bottom: 0.46875rem;
		h2{
			margin-top: 0.46875rem;
			margin-bottom: 0.15625rem;
			color: #570300;
			@include font-dpr(16px);
			@include line-h(20px);
		}
		div{
			float:left;
		}
		h4{
			color: #c0a877;
			@include font-dpr(15px);
			@include line-h(18px);
			// margin-bottom: 0.46875rem;
		}
		p{
			color: #2a2a2a;
			@include font-dpr(14px);
			@include line-h(20px);
		}
	}
	.block1{
		.info-cont{
			width: 5.125rem;
			padding-right: 0.3125rem;
		}
		.img-cont{
			width: 4.25rem;
			img{
				width: 100%;
			}
		}
	}
	.block2{
		.info-cont{
			width: 4.90625rem;
			padding-left: 0.3125rem;
			padding-bottom: 0.3125rem;
		}
		.img-cont{
			width: 4.46875rem;
			padding-bottom: 0.3125rem;
			img{
				width: 100%;
			}
		}
		.block2-p{
			float:left;
			padding-left:0.3125rem;
		}
	}
	.block3{
		.info-cont{
			width: 5.15625rem;
			padding-right: 0.3125rem;

		}
		.img-cont{
			width: 4.21875rem;
			img{
				width: 100%;
			}
		}
	}
	.block4{
		padding-bottom: 0;
	}
	.cont{
		position: relative;
		padding-bottom: 0.46875rem;
		img{
			width: 100%;
		}
		p{
			@include font-dpr(14px);
			@include line-h(20px);
			text-indent: 2em;
		}
	}
}
</style>
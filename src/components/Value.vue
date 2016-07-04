<template>
	<div class="value-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			海黄价值
			<a class="tab" href="javascript:void(0)" @click="showMenuList">
				<img src="/static/img/list2.png">
			</a>
		</header>
		<div class="block block1">
			<h4>什么是黄花梨</h4>
			<p>黄花梨，学名降香黄檀，因其主要产区在我国海南岛，遂又被称为海南黄檀木、海南黄花梨木。黄花梨是豆科黄檀树种，香枝木类。树高可达20米，胸径可达0.8米。黄花梨是国际标准5属8类34种红木之一，用途广泛。其木性稳定，木材价值非常高，是海南特有的珍贵树种。因其成材缓慢、木质坚实、花纹美丽，故始终位列四大名木之一，现为国家二级保护植物。</p>
			<div>
				<img src="/static/img/value/yellowpear2-1.jpg">
				<img src="/static/img/value/yellowpear1-2.jpg">
				<img src="/static/img/value/yellowpear1-3.jpg">
				<img src="/static/img/value/yellowpear1-4.jpg">
			</div>
		</div>
		<div class="block block2">
			<h4>海南黄花梨-花梨之冠</h4>
			<p class="img-cont">
				<img src="/static/img/value/yellowpear2.jpg">
				黄花梨生长在世界许多地方，主要分布在中国海南岛、岭南一带，以及越南、缅甸等地，非洲、南美洲亦有分布。这其中，海南黄花梨无论是材质还是纹理上都是最好的黄花梨，这是得到世界公认的，亦被中国列为二级保护植物。
			</p>
			<div>
				<p>
					据《中国树木志》记载，野生海南黄花梨产于海南岛上除万宁、陵水、五指山市以外的各市县，其中白沙、东方、昌江、乐东、三亚、海口为主要产区，名贵的海南黄花梨则主要生长在黎族地区，其中尤以昌江王下地区的海南黄花梨最为珍贵。
				</p>
			</div>
		</div>
		<div class="block block3">
			<h4>红木之王 源远流长</h4>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;黄花梨自古就备受皇家青睐。其木性极为稳定，纹理或隐或现，色泽不静不喧，被视为珍贵木材。从明代开始，黄花梨即被应用于高档家具的制作中。而明清盛世的文人、仕大夫之族对家具的审美情趣更使得这一时期的黄花梨家具卓而不群，可称为世界家具艺术中的珍品，流传至今。<br />&nbsp;&nbsp;&nbsp;&nbsp;如今黄花梨是34种国标红木中身份最显赫也是价格最高昂的，当之无愧为“红木之王“。也正是黄花梨的弥足珍贵，野生的黄花梨几被砍伐殆尽，野生降香黄檀资源业已枯竭，现在人工栽种的大树均受严密保护</p>
			<img src="/static/img/value/yellowpear3.jpg">
		</div>
		<div class="block block4">
			<h4>材质独特 用途广泛</h4>
			<p>
				<img src="/static/img/value/yellowpear4.jpg">
				黄花梨木的木性极为稳定，不管寒暑都不变形、不开裂、不弯曲，有一定的韧性，适合作各种异形家具，如三弯腿，其弯曲度很大，惟黄花梨木才能制作，其他木材较难胜任。用海黄制作的饰品，因其独特的材质和生动多变的花纹而饱受文玩人士的青睐。此外，海黄还是一味中药，具有降血压的作用。
			</p>
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
.value-view{
	@include common-head();
	.block{
		padding: 0.46875rem 0.3125rem;
		h4{
			padding-bottom: 0.3125rem;
			color: #c0a877;
			@include font-dpr(15px);
			@include line-h(16px);
		}
		p{
			padding-bottom: 0.3125rem;
			color: #2a2a2a;
			@include font-dpr(14px);
			@include line-h(20px);
		}
	}
	.block:nth-child(odd){
		background-color: #f7f7f7;
	}
	.block:nth-child(even){
		background-color: #ffffff;
	}
	.block1{
		div{
			font-size:0;
			img{
				width: 2.296875rem;
				padding-right: 0.0625rem;
			}
			img:last-child{
				padding-right: 0;
			}
		}
	}
	.block2{
		p.img-cont{
			overflow: hidden;
			padding-bottom: 0.3125rem;
		}
		img{
			float: left;
			width: 3.21875rem;
			padding-right: 0.3125rem;
		}
	}
	.block3{
		img{
			width: 100%;
		}
	}
	.block4{

		img{
			float: left;
			width: 3.671875rem;
			padding-right: 0.3125rem;
		}
		p{
			overflow: hidden;
			padding-bottom:0;
		}
	}
}
</style>
<template>
	<div class="fenqi-detail-view" v-show="subscriptionDetail">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			商品详情
		</header>
		<div class="detail">
			<div>
				<img :src="detail.img_url">
			</div>
			<div>
				<p v-text="detail.title+detail.goods_no"></p>
				<p>{{detail.plantYear}}年树分10期</p>
				<p>{{detail.stock_quantity}}/{{detail.sale_number}}棵</p>
				<p>每期<span>￥{{detail.sell_price/10}}</span><span>元/棵</span></p>

			</div>
		</div>
		<div class="detail-note">

				<p><span>种植日期：</span><span v-text="detail.plantTime"></span></p>
				<p><span>区域：</span><span v-text="detail.plantArea"></span></p>

			<p>**每份包含一株{{detail.plantYear}}年树龄的海南黄花梨树，以及整整10年的管护服务。每株海黄树都有唯一定位编码，可以随时考察，随时委托处置。海黄树在生长过程中因故死亡，丢失或不长芯可以更换。</p>
			<div>
				<span>一树一码</span>
				<span>随时观察</span>
				<span>处置灵活</span>
				<span>十倍回报</span>
			</div>
			<div class="edit-product-num">
				<a href="javascript:void(0)"></a>
				<input type="number">
				<a href="javascript:void(0)"></a>
			</div>
		</div>
		<div class="detail-info">
			<p>商品详情</p>
			<div class="img-cont">
				<img src="/static/img/fenqi/01.jpg">
				<img src="/static/img/fenqi/02.jpg">
				<img src="/static/img/fenqi/03.jpg">
				<img src="/static/img/fenqi/04.jpg">
				<img src="/static/img/fenqi/05.jpg">
				<img src="/static/img/fenqi/06.jpg">
				<img src="/static/img/fenqi/07.jpg">
				<img src="/static/img/fenqi/08.jpg">
				<img src="/static/img/fenqi/09.jpg">
				<img src="/static/img/fenqi/10.jpg">
				<img src="/static/img/fenqi/11.jpg">
				<img src="/static/img/fenqi/12.jpg">
			</div>
		</div>
		<div class="buy" @click="buy">立即认购</div>
	</div>
</template>

<script>
import { subscriptionInfo } from '../vuex/getters'
export default {
	data () {
		return {
			detail: {},
			subscriptionDetail: true
		}
	},
	vuex: {
		getters: {
			subscriptionInfo
		}
	},
	route: {
		data ({to}) {
			if(this.subscriptionInfo.lists.length == 0){
				this.subscriptionDetail = false
				to.router.go({path: '/app/subscription'})
			}else{
				let id = to.params.id
				this.subscriptionDetail = true
				this.subscriptionInfo.lists.forEach((item, index) => {
					if(item.id == id){
						this.detail = item
					}
				})
			}
		}
	},
	methods: {
		buy () {
			window.location.href = 'http://weidian.com/item.html?itemID=1839150535'
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.fenqi-detail-view{
	// height: 100%;
	// overflow-y: scroll;
	background: #f4f5f9;
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
	.detail{
		padding: 0.3125rem;
		border-bottom: 1px solid #e9e9ed;
		background-color: #ffffff;
	}
	.detail>div:first-child{
		padding-bottom: 0.3125rem;
		text-align:center;
		img{
			height: 5.9375rem;
		}
	}
	.detail>div:last-child{
		position: relative;
		p:nth-child(1){
			color: #2a2a2a;
			@include font-dpr(14px);
			padding-bottom: 16px;
		}
		p:nth-child(2),p:nth-child(3){
			color: #8a8a8a;
			@include font-dpr(12px);
			padding-left: 0.46875rem;
		}
		p:nth-child(2){
			margin-bottom: 0.15625rem;
			background: url(/static/img/treeage-grey.png) 0 center no-repeat;
			background-size: 0.28125rem 0.34375rem;
		}
		p:nth-child(3){
			background: url(/static/img/stock.png) 0 center no-repeat;
			background-size: 0.28125rem 0.34375rem;
		}
		p:nth-child(4){
			position: absolute;
			bottom: 0;
			right: 0;
			color: #8a8a8a;
			span:nth-child(1){
				color: #f23030;
				@include font-dpr(14px);
			}
			span:nth-child(2){
				color: #8a8a8a;
				@include font-dpr(12px);
			}
		}
	}
	.detail-note{
		margin-top: 0.3125rem;
		margin-bottom: 0.3125rem;
		padding: 0.3125rem;
		border-top: 1px solid #e9e9ed;
		border-bottom: 1px solid #e9e9ed;
		background-color: #ffffff;
		p{	
			display:inline-block;
			width: 100%;
			box-sizing: border-box;
		}
		p:nth-child(1){
			@include font-dpr(12px);
			padding-left: 0.15625rem;
			padding-top: 0.3125rem;
			background: url(/static/img/rightarrow2.png) 9.0625rem bottom no-repeat;
		}
		p:nth-child(2){
			@include font-dpr(12px);
			padding-left: 0.15625rem;
			padding-bottom: 0.3125rem;
			text-indent: 2em;
		}
		p:nth-child(3){
			@include font-dpr(10px);
			color: #8a8a8a;
			padding-bottom: 0.3125rem;
		}
		div{
			width: 100%;
			span{
				@include font-dpr(12px);
				color: #c0a877;
				padding: 0.078125rem 0.15625rem;
				margin-right: 0.1875rem;
				border:1px solid #c0a877;
			}
		}
		div.edit-product-num{
			position:relative;
			width: 100%;
			height: 1.09375rem;
			margin-top: 0.3125rem;
			// margin-bottom: 0.3125rem;
			padding: 0.3125rem 1.09375rem;
			border: 1px solid #dadadb;
			box-sizing: border-box;
			input{
				width: 100%;
				padding: 0;
				border: 0;
				box-sizing: border-box;
				text-align: center;
				@include font-dpr(14px);
			}
			a{
				display:block;
				position:absolute;
				top: 0;
				width: 1.09375rem;
				height: 1.09375rem;
				line-height: 1.09375rem;
				text-align: center;
				background-color: #e6e6e6;
				color: #999;
				@include font-dpr(16px);
			}
			a:first-child{
				left: 0;
				background: url(/static/img/desc.png) center center no-repeat;
				background-color: #e6e6e6;
			}
			a:last-child{
				right: 0;
				background: url(/static/img/add.png) center center no-repeat;
				background-color: #e6e6e6;
			}
		}
	}
	.detail-info{
		padding: 0.3125rem;
		p{
			height: 1.25rem;
			line-height: 1.25rem;
			border-bottom: 1px solid #e9e9ed;
			@include font-dpr(14px);
			color: #c0a877;
			text-align: center;
		}
		.img-cont{
			img{
				width: 100%;
				vertical-align: top;
			}
		}
	}
	.buy{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		text-align: center;
		color: #ffffff;
		background-color: #570300;
	}
}
</style>
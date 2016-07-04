<template>
	<div class="view-home">
		<div class="title">
			首页
			<a v-link="{path: '/login'}">登陆</a>
		</div>
		<home-slider></home-slider>
		<p class="flow">
			云海黄操作流程：注册 > 认证 > 充值 > 购树 > 转让，借款，赠与，变现
		</p>
		<div class="introduce">
			<a class="what" v-link="{path: '/introduce'}">
				<img src="/static/img/what.png">
				<p>什么是云海黄</p>
				<p>云海黄是三策林业旗下海南黄花梨活体植株交易平台。</p>
			</a>
			<a class="value" v-link="{path: '/value'}">
				<img src="/static/img/value.png">
				<p>黄花梨的价值</p>
				<p>降香名品，珍贵木材，文玩药用高端上乘。</p>
			</a>
		</div>
		<ul class="buy-list">
			<li v-for="item in productInfo.lists">
				<a v-link="{name: 'productdetail', params: {id: item.id}}">
					<div class="pic-cont">
						<img :src="item.img_url">
						<div>{{item.plantYear}}年</div>
					</div>
					<div class="detail-cont">
						<p v-text="item.title"></p>
						<p v-text="item.goods_no"></p>
						<p>{{item.stock_quantity}}/{{item.sale_number}}棵</p>
						<p>￥{{item.sell_price}}</p>
					</div>
				</a>
			</li>
		</ul>
		<div class="show-more">
			<a v-show="productInfo.showMoreBtn" href="javascript:void(0);" @click="showMoreProduct">查看更多</a>
			<a v-show="productInfo.showEmpty" href="javascript:void(0);">暂无数据</a>
			<a v-show="!productInfo.showMoreBtn && !productInfo.showEmpty" href="javascript:void(0);">没有更多</a>
		</div>
		<div class="platform-info">
			<a v-link="{path: '/problem'}">
				<img src="/static/img/question.png">
				<p>常见问题</p>
			</a>
			<a v-link="{path: '/news'}">
				<img src="/static/img/announcement.png">
				<p>平台公告</p>
			</a>
			<a href="javascript:void(0);">
				<img src="/static/img/ranking.png">
				<p>树王排行</p>
			</a>
		</div>
		<content-footer></content-footer>
	</div>
</template>

<script>
	import HomeSlider from "./HomeSlider.vue"
	import ContentFooter from "./ContentFooter.vue"
	import { getProductList } from '../vuex/action'
	import { productInfo } from '../vuex/getters'
	export default {
		components: {
			HomeSlider,
			ContentFooter
		},
		vuex: {
			getters: {
				productInfo
			},
			actions: {
				getProductList
			}
		},
		route: {
			activate () {
				this.getProductList({})
			}
		},
		methods: {
		    showMoreProduct () {
		    	this.getProductList({pageindex:this.productInfo.pageindex})
		    }
		}
	}
</script>

<style lang="sass">
@import "../assets/base.scss";
.view-home{
	background-color: #f4f5f9;
	.title{
		positin: relative;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #c0a877;
		color: #fff;
		text-align:center;
		@include font-dpr(16px);
		a{
			position:absolute;
			right: 0.3125rem;
			color: #570300;
		}
	}
	.flow{
		height: 0.78125rem;
		line-height: 0.78125rem;
		border-bottom:1px solid #dfe1e5;
		text-align:center;
		color: #c0a877;
		@include font-dpr(9px);
		background-color: #ffffff;
	}
	.introduce{
		margin-bottom: 0.3125rem;
		overflow:hidden;
		background-color: #ffffff;
		a{
			float:left;
			width: 50%;
			padding: 0.3125rem 0.296875rem 0.3125rem 0.3125rem;
			border-right: 1px solid #dfe1e5;
			box-sizing: border-box;
			img{
				width: 100%;
			}
			p{
				color: #570300;
				@include font-dpr(14px);
			}
			p:last-child{
				color: #8a8a8a;
				@include font-dpr(10px);
			}
		}
		.value{
			padding-right: 0.3125rem;
		}
	}
	.buy-list{
		padding-bottom: 0.3125rem;
		// margin-bottom: 0.3125rem;
		background-color: #fff;
		li{
			padding-left: 0.3125rem;
			padding-right: 0.3125rem;
		}
		li>a{
			display:block;
			overflow: hidden;
		}
		.pic-cont{
			float:left;
			position:relative;
			width: 3.28125rem;
			height: 3.28125rem;
			margin-right: 0.3125rem;
			margin-top: 0.15625rem;
			img{
				width: 100%;
				height: 100%;
			}
			div{
				position: absolute;
				top: 0.3125rem;
				left: 0;
				width: 0.875rem;
				height: 0.625rem;
				line-height: 0.625rem;
				text-align: center;
				background: url(/static/img/treeagebg.png) 0 0 no-repeat;
				background-size: 100% 100%;
				@include font-dpr(10px);
				color: #fff;
			}
		}
		.detail-cont{
			width: 100%;
			height: 2.96875rem;
		    margin-left: 3.59375rem;
			margin-top: 0.46875rem;
			box-sizing: border-box;
			border-bottom: 1px solid #dfe1e5;
			p:nth-child(1),p:nth-child(2){
				color: #2a2a2a;
				@include font-dpr(14px);
			}
			p:nth-child(3){
				line-height: 0.15625rem;
				padding-top: 0.15625rem;
				padding-bottom: 0.3125rem;
				color: #8a8a8a;
				@include font-dpr(10px);
			}
			p:nth-child(4){
				color: #f23030;
				@include font-dpr(14px);
			}
		}
	}
	.show-more{
		padding: 0 0.3125rem 0.3125rem 0.3125rem;
		background-color: #ffffff;
		a{
			display:block;
			width: 100%;
			height: 1.09375rem;
			line-height: 1.09375rem;
			border-radius: 6px;
			text-align: center;
			color: #999999;
			@include font-dpr(12px);
			background-color: #eeeeee;
		}
	}
	.platform-info{
		margin-top: 0.3125rem;
		margin-bottom: 0.3125rem;
		padding: 0.3125rem;
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowrap;
		-webkit-flex-flow: row nowrap;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		background-color: #ffffff;
		a{
			height: 1.5625rem;
			text-align: center;
			img{
				// width: 0.6875rem;
				height: 0.6875rem;
				vertical-align:top
			}
			p{
				padding-top: 0.25rem;
				color: #8a8a8a;
				@include font-dpr(12px);
			}
		}
	}
}
</style>
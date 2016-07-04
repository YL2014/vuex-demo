<template>
	<div class="subscription-view">
		<div class="title">认购海黄</div>
		<div class="list-tag">
			<a href="javascript:void(0);" :class="{'active': !activeItem}" @click="changeActive(0)">认购</a>
			<a href="javascript:void(0);" :class="{'active': activeItem}"  @click="changeActive(1)">分期</a>
		</div>
		<!-- 认购 -->
		<ul v-show="!activeItem" class="list">
			<li v-for="item in subscriptionInfo.lists">
				<a v-link="{name: 'subscriptiondetail', params: {id: item.id}}">
					<div class="pic-cont">
						<img :src="item.img_url">
						<div>{{item.plantYear}}年</div>
					</div>
					<div class="detail-cont">
						<p>{{item.title+item.goods_no}}</p>
						<p>{{item.plantYear}}年树</p>
						<p>{{item.stock_quantity}}/{{item.sale_number}}棵</p>
						<p><span>￥{{item.sell_price}} </span><span>元/棵</span></p>
					</div>
				</a>
			</li>
		</ul>
		<!-- 分期 -->
		<ul v-show="activeItem" class="list">
			<li v-for="item in subscriptionInfo.lists">
				<a v-link="{name: 'fenqidetail', params: {id: item.id}}">
					<div class="pic-cont">
						<img :src="item.img_url">
						<div>{{item.plantYear}}年</div>
					</div>
					<div class="detail-cont">
						<p>{{item.title+item.goods_no}}</p>
						<p>{{item.plantYear}}年树分10期</p>
						<p>{{item.stock_quantity}}/{{item.sale_number}}棵</p>
						<p>每期<span>￥{{item.sell_price/10}} </span><span>元/棵</span></p>
					</div>
				</a>
			</li>
		</ul>
		<content-footer></content-footer>
	</div>
</template>

<script>
import ContentFooter from './ContentFooter.vue'
import { getSubscriptionList } from '../vuex/action'
	import { subscriptionInfo } from '../vuex/getters'
export default {
	data () {
		return {
			activeItem: false
		}
	},
	components: {
		ContentFooter
	},
	vuex: {
		getters: {
			subscriptionInfo
		},
		actions: {
			getSubscriptionList
		}
	},
	route: {
		data () {
			this.getSubscriptionList({});
		}
	},
	methods: {
	    showMoreSubscription () {
	    	this.getSubscriptionList({pageindex:this.subscriptionInfo.pageindex})
	    },
	    changeActive (num) {
	    	if(!(num ^ this.activeItem)){
	    		return
	    	}
	    	this.activeItem = !this.activeItem
	    }
	}
	
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.subscription-view{
	background-color: #f4f5f9;
	.title{
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #c0a877;
		color: #fff;
		text-align:center;
		@include font-dpr(16px);
	}
	.list-tag{
		@include flex-parent;
		width: 100%;
		background-color: #ffffff;
		a{
			height: 1.1875rem;
			line-height: 1.1875rem;
			width: 50%;
			border-bottom: 1px solid #e9e9ed;
			text-align:center;
			color: #8a8a8a;
			// background-color: #f2f2f2;
			@include font-dpr(14px);
		}
		a.active{
			color: #570300;
			border-bottom-color: #570300;
		}
	}
	.list{
		margin-bottom: 0.3125rem;
		padding-left: 0.15625rem;
		padding-right: 0.15625rem;
		background-color: #f4f5f9;
		li>a{
			display:block;
			width: 100%;
		}
		li{
			width: 100%;
			margin-top: 0.15625rem;
			border: 1px solid #e9e9ed;
			padding: 0.15625rem 0.15625rem 0.3125rem;
			background-color: #ffffff;
			box-sizing: border-box;
			.pic-cont{
				position: relative;
				width: 100%;
				height: 4.21875rem;
				padding-bottom: 0.25rem;
				text-align: center;
				img{
					height: 4.21875rem;
				}
				div{
					position: absolute;
					top: 0;
					left: 0;
					width: 0.875rem;
					height: 0.625rem;
					line-height: 0.625rem;
					color: #ffffff;
					@include font-dpr(10px);
					background: url(/static/img/treeagebg.png) 0 0 no-repeat;
					background-size: 100% 100%;
				}
			}
			.detail-cont{
				width: 100%;
				position: relative;
				p:nth-child(1){
					color: #2a2a2a;
					@include font-dpr(14px);
					// line-height: 14px;
					padding-bottom: 16px;
				}
				p:nth-child(2),p:nth-child(3){
					color: #8a8a8a;
					@include font-dpr(12px);
					// line-height: 0.34375rem;
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
		}
	}
}
</style>
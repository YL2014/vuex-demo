<template>
	<div class="problem-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			常见问题
		</header>
		<div class="tab-cont">
			<a href="javascript:;" v-for="item in tab" :class="{'active': $index==activeTab}" @click=changeTab($index)>{{item}}</a>
		</div>
		<div v-show="activeTab==0" class="shouqian">
			<div class="item" v-for="item in shouqian">
				<p class="q" @click="showA($index, 'shouqian')">{{item.q}}</p>
				<p class="a" v-show="item.bool" transition="expand">{{item.a}}</p>
			</div>
		</div>
		<div v-show="activeTab==1" class="shouhou">
			<div class="item" v-for="item in shouhou">
				<p class="q" @click="showA($index, 'shouhou')">{{item.q}}</p>
				<p class="a" v-show="item.bool" transition="expand">{{item.a}}</p>
			</div>
		</div>
		<div v-show="activeTab==2" class="chongzhi">
			<div class="item" v-for="item in chongzhi">
				<p class="q" @click="showA($index, 'chongzhi')">{{item.q}}</p>
				<p class="a" v-show="item.bool" transition="expand">{{item.a}}</p>
			</div>
		</div>
		<div v-show="activeTab==3" class="caozuo">
			<div class="item" v-for="item in caozuo">
				<p class="q" @click="showA($index, 'caozuo')">{{item.q}}</p>
				<p class="a" v-show="item.bool" transition="expand">{{item.a}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tab: ['售前问题', '售后问题', '充值&取现', '操作指引'],
			activeTab: 0,
			shouqian: [
				{
					q: '海南黄花梨的增值空间有多大？',
					a: '海南黄花梨是我们海南的珍贵树种，成材后价值不菲，增值空间非常巨大。以十年树龄的海南黄花梨为例，其市场价格高达12万元，十年有望获得10-30倍回报，赶超IPO收益。',
					bool: false
				},{
					q: '平台所售海黄真实性如何？',
					a: '平台所售每一株海黄树，均真实种植于海南三策林业旗下的海黄基地内，每棵海黄树拥有终生唯一识别码，已购买用户可随时实地考察。海南三策林业公司在海南拥有的海黄基地占地面积总计约三万余亩，除了已经售出和待售批次的海黄树以外，还拥有大量自持海黄树以及储备林，因此海黄树的真实性不存在问题。',
					bool: false
				},{
					q: '购买后树的所有权归谁？',
					a: '您在购树后即拥有树的所有权，并享有自由处置的权利，可转让、赠予他人、也可实地砍伐运回。',
					bool: false
				},{
					q: '购树后，管护服务是免费的吗？',
					a: '平台所售海黄产品均附带10~20年的管护服务，到期后每棵树每年应缴纳300元管护费。具体免费管护期限请查看认购详情。',
					bool: false
				},{
					q: '海黄树遇到意外情况如何处理？',
					a: '海黄树在生长过程中因故死亡、丢失或不长芯可以更换。',
					bool: false
				},{
					q: '购买的海黄树生长多久才可以转卖？',
					a: '平台并不限制，您可以自主决定。由于海黄树的市场价值会随着自然生长而加速增值，为实现更好的收益，建议您不要选择在购买不久就转让。',
					bool: false
				}
			],
			shouhou: [
				{
					q: '转让功能什么时候上线？',
					a: '云海黄平台网站技术团队正在对转让功能进行严谨的测试，将在不久后推出，敬请期待。此外，还有多个重磅功能正在开发中，将陆续上线供您体验。',
					bool: false
				},{
					q: '如果我要把购买的树实地砍伐变现，该如何操作？',
					a: '首先请致电我们的电话客服进行预约，我们会在电话里告知您三策林业公司的基地地址以及交通指南，您可以在约定日前往基地，在我们工作人员的配合下进行砍伐作业，我们会提供必要的支持。',
					bool: false
				},{
					q: '是否可以实地查看我购买的海黄树？',
					a: '可以的。请致电电话客服进行预约登记，我们会安排工作人员协助您的考察。',
					bool: false
				},{
					q: '不同年龄的海黄树，其市场价格是怎样的？',
					a: '海黄树在生长的前五年，需要持续投入较大管护成本，且由于芯格未长出，不具有木材价值，因此在传统市场，这一阶段的海黄树均以持有为主，价格并不高。一旦跨过这一时期，芯格长出，海黄树的身价出现暴涨，七年树的市场价格就可达到1万元，十年树可达到12万，十四年树可达到29万。',
					bool: false
				},{
					q: '我购买的海黄树可以赠送给家人或朋友吗？',
					a: '可以。如有需要请致电平台客服，核实您的身份后，我们将协助您办理赠送手续。',
					bool: false
				},{
					q: '如何在线上快速获取我所拥有的海黄树的近况信息？比如照片或视频？',
					a: '云海黄平台已将您的该类需求纳入发展规划，将在日后逐步推出一系列人性化服务，敬请期待。',
					bool: false
				},{
					q: '海黄树是否每年都要续缴管护费？',
					a: '目前您无需缴纳管护费，因平台出售的海黄树均附带至少10年（具体年限请在购买时查阅产品详情）的管护服务，附带管护服务到期后，您需要为每棵树每年缴纳300元管护费。',
					bool: false
				}
			],
			chongzhi: [
				{
					q: '如何充值？',
					a: '如您的账户尚未实名认证与绑卡，请先完成认证与绑卡。在我的账户中点击充值按钮，即可打开在线充值页面。云海黄平台使用知名第三方支付平台的在线支付系统，支持主流储蓄卡和信用卡。另外，使用非账户本人的银行卡也是可以支付的，但不得非法使用。',
					bool: false
				},{
					q: '充值后多久到账？',
					a: '充值成功即时到账。',
					bool: false
				},{
					q: '充值后不购买可以提现吗？',
					a: '可以的，由于您充值时第三方支付平台会向云海黄平台收取手续费，因此为防止充值系统遭恶意利用，您充值后尚未购买的资金，在充值后的30天内提现时，会产生2%的手续费。充值满30天后取现不收取手续费，转让成交所得款项在取现时也不收取手续费。',
					bool: false
				},{
					q: '提现多久可以到账？',
					a: '工作日下午4点前提交的提现请求，我们会在第二个工作日的下午6点前处理完毕，双休日、法定节假日提交的提现请求，我们会在双休日或节假日后的第一个工作日下午6点前处理完毕。',
					bool: false
				},{
					q: '平台出售的海黄树，不同树龄的树是如何定价的？',
					a: '采用与市场规律相符合的定价规则。1年树售价3000元，3年树售价约8000元，5年树售价约1.5万元，8年树售价约为5万元，具体价格请以平台发售公告为准。',
					bool: false
				}
			],
			caozuo: [
				{
					q: '我是新手，请问要如何购买黄花梨？',
					a: '建议您按照如下步骤操作：①注册登录②实名认证③充值④购买。',
					bool: false
				},{
					q: '为什么要实名认证？可以非实名购买吗？',
					a: '不可以。因海南黄花梨树本身较为贵重，一株幼树经长期持有后将成为一笔不菲的资产，因此，为了保障购买者的资产安全，平台全部采用实名制，并生成与您实名信息相绑定的电子合同，使您的资产受到法律效力保护，具有可传承性。',
					bool: false
				},{
					q: '购买后，如何赠送他人？',
					a: '请致电平台电话客服，核实您的身份后，客服将协助您办理赠送手续。',
					bool: false
				},{
					q: '转让、抵押借款该如何操作？',
					a: '云海黄正在对上述功能进行开发及测试，请等待功能上线便可知晓。',
					bool: false
				}
			]
		}
	},
	methods: {
		changeTab (num) {
			this.activeTab = num
		},
		showA (num, type) {
			this[type].map((item, index) => {
				if(index != num){
					item.bool = false
				}else{
					item.bool = true
				}
			})
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.problem-view{
	background: #ffffff;
	@include common-head();
	.tab-cont{
		overflow: hidden;
		border-bottom: 1px solid #e9e9ed;
		margin-bottom: 0.3125rem;
		a{
			float: left;
			width: 25%;
			height: 1.1875rem;
			line-height: 1.1875rem;
			text-align: center;
			color: #8a8a8a;
			@include font-dpr(14px);
		}
		a.active{
			color: #2a2a2a;
		}
	}
	.item{
		padding-left: 0.3125rem;
		border-bottom: 1px solid #dfe1e5;
	}
	.q{
		padding-top: 0.390625rem;
		padding-bottom: 0.390625rem;
		line-height: 0.46875rem;
		padding-left: 0.625rem;
		background: url(/static/img/Q.png) 0 0.4375rem no-repeat;
		background-size: 0.375rem 0.46875rem;
		color: #2a2a2a;
		@include font-dpr(14px);
	}
	.a{
		padding-top: 0.3125rem;
		padding-bottom: 0.3125rem;
		padding-left: 0.625rem;
		background: url(/static/img/A.png) 0 0.34375rem no-repeat;
		background-size: 0.375rem 0.46875rem;
		background-color: #f2f2f2;
		color: #8a8a8a;
		@include font-dpr(14px);
		@include line-h(18px);
	}

	.expand-transition {
		transition: all .3s ease;
	}
	.expand-enter, .expand-leave {
		height: 0;
		padding: 0 10px;
		opacity: 0;
	}
}
</style>
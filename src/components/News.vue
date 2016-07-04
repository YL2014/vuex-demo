<template>
	<div class="news-view">
		<header>
			<a class="back" href="javascript:void(0)" onclick="history.back();">
				<img src="/static/img/back.png">
			</a>
			平台公告
		</header>
		<div>
			<div class="item" v-for="item in list">
				<h4>{{item.title}}</h4>
				<p class="content">{{item.content}}</p>
				<p class="foot">
					<span>{{item.time}}</span>
					<a href="javascript:;">阅读全文>></a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{
					title: '关于云海黄操作说明公告',
					content: '第一步：注册，完善个人资料，认证（购买必须实名认证）第二步：充值，认购，同意“协议”即认购成功第三步：到我的账户，查看资产',
					time: '2016/3/30 16:54:14'
				},{
					title: '三策林业基地说明',
					content: '三策林业基地说明三策集团在海南已经收购三亚东明、保亭和江淼等十多家公司，目前正以大手笔的力度整合并购，未来三策林业将在海南形成蔚为壮观的百年花梨盛景。',
					time: '2016/3/8 12:54:06'
				},{
					title: '关于一年海南黄花梨新树发布公告',
					content: '产 品： 海南黄花梨树 种 植日期：2015年3月 树 龄： 1年 认 购 价格：3000元 种植管护期：10年 （免十年管护费，10年后每年300元管护费） 种植基地：海南省保亭县新政镇华侨队C区HQ-C20150310001至HQ-C20150320000 海南三策…',
					time: '2016/3/8 10:35:47'
				},{
					title: '海黄价值参考表',
					content: '海黄价值参考表树龄芯材生长直径芯材相应重量市场参考价1年100元（按照绿化树价格计算）2年300元（按照绿化树价格计算）3年2千元（按照绿化树价格计算）...',
					time: '2016/3/8 10:28:12'
				},{
					title: '关于三策集团“云海黄”交易平台上线的公告',
					content: '“云海黄”是海南三策林业投资发展有限公司旗下的交易平台，并由深圳市三策科技有限公司提供技术支持。海南三策林业投资发展有限公司是目前国内唯一种植和经营海南黄花梨木的专业化公司，背靠三策集团，进行优质资源整合，实现海黄全产业链布局。',
					time: '2016/3/8 10:26:52'
				}
			]
		}
	}
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.news-view{
	@include common-head();
	.item{
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		background-color: #ffffff;
		h4{
			margin-top: 0.3125rem;
			padding-top: 0.234375rem;
			padding-bottom: 0.234375rem;
			@include font-dpr(15px);
			@include line-h(18px);
			color: #c0a877;
		}
		p.content{
			padding-top: 0.3125rem;
			padding-bottom: 0.3125rem;
			padding-left: 0.3125rem;
			@include font-dpr(14px);
			@include line-h(16px);
			color: #666;
		}
		p.foot{
			overflow: hidden;
			height: 0.78125rem;
			line-height: 0.78125rem;
			span{
				@include font-dpr(12px);
				color: #8a8a8a;
			}
			a{
				float:right;
				color: #2a2a2a;
				@include font-dpr(12px);
			}
		}

	}
}

</style>
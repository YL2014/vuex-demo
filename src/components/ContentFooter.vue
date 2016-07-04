<template>
	<div class="content-footer">
		 <div class="img-cont">
			<img src="/static/img/QRcode.png">
		</div>
		<div class="detail-cont">
			<p class="tel">400-833-8186</p>
			<p class="work-day">工作日：9:00-21:00</p>
			<p class="free-day">节假日：9:00-12:00/14:00-21:00</p>
			<p class="shen-addr">深圳：南山区科苑路11号金融科技大厦A栋10楼</p>
			<p class="hai-addr">海南：保亭县三道镇海榆中线黄花梨庄园</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>
<style lang="sass">
@import "../assets/base.scss";
.content-footer{
	padding: 0.3125rem;
	background-color: #fff;
	overflow: hidden;
	.img-cont{
		float:left;
		width: 1.875rem;
		padding-right: 0.3125rem;
		img{
			width: 100%;
		}
	}
	.detail-cont{
		float:left;
		width: 7.1875rem;
		.tel, .shen-addr, .hai-addr{
			@include font-dpr(12px);
			color: #2a2a2a;
		}
		.work-day, .free-day{
			@include font-dpr(10px);
			color: #8a8a8a;
		}

		.free-day{
			padding-bottom: 0.15625rem;
		}
	}
}
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) {
    .content-footer{
    	.detail-cont{
    		.tel, .shen-addr, .hai-addr{
    			[data-dpr="2"] & {
					font-size: 20px;
					line-height: 0.4375rem;
				}
    		}
    		.work-day, .free-day{
				[data-dpr="2"] & {
					font-size: 18px;
				}
			}
			.free-day{
				padding-bottom: 0.15625rem;
			}
    	}
    }
}
</style>
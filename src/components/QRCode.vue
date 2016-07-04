<template>
	<div class="qrcode-view">
		<div class="title">
			我的二维码
		</div>
		<div v-el:canvas class="qrcode-cont"></div>
	</div>
</template>
<script>
import QRCode from '../utils/qrcode'
export default {
	route: {
		data ({to}) {
			var canvas = this.$els.canvas
			if(canvas.innerHTML == ""){
				var qrcode = new QRCode(canvas, "http://weixin.yun2h.com/#!/register?referer="+to.params.code)
			}
		}
	}
}
</script>
<style lang="sass">
@import "../assets/base.scss";
.qrcode-view{
	.title{
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #c0a877;
		color: #fff;
		text-align:center;
		@include font-dpr(16px);
	}
	.qrcode-cont{
		width: 4.0rem;
		margin: 0 auto 0.46875rem;
    	padding-top: 1rem;
	}

	img{
		border-radius: 10px;
		width: 4.0rem;
		height: 4.0rem;
	}
}
</style>
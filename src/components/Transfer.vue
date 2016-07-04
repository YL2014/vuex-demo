<template>
	<div class="transfer-view">
		<header>
			转让
		</header>
		<div class="expect">
			<img  src="/static/img/expect.jpg">
		</div>
		
	</div>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import "../assets/base.scss";
.transfer-view{
	@include common-head();
	.expect{
		position: absolute;
		width: 100%;
		top: 1.25rem;
		bottom: 1.5625rem;
		img{
			width: 100%;
		height: 100%;
		}
	}
}
</style>
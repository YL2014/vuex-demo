<template>
  <div v-show="show" class="dialog-alert" transition="bounce">
	<div class="masker"></div>
	<div class="content">
		<div class="real-content">
			<div v-if="title" class="alert-head">{{title}}</div>
			<div class="alert-content"><slot></slot></div>
			<div class="alert-btn" @click="onHide">{{buttonText}}</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: '确定'
    },
  },
  methods: {
    onHide: function () {
      this.show = false
      this.$emit('on-hide')
    }
  },
  watch: {
    show: function (val) {
      if (val) {
        this.$emit('on-show')
      }
    }
  }
}
</script>

<style lang="sass">
@import "../assets/base.scss";
.dialog-alert{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	.masker{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.6;
	}
	.content{
		position: absolute;
		width: 100%;
		height: 100%;
		.real-content{
			background-color: #fff;
			width: 90%;
			margin: 30% auto 0;
			padding: 0.46875rem 0.375rem;
			border-radius: 10px;
			box-sizing: border-box;
			.alert-head{
				padding-bottom: 0.46875rem;
				color: #333333;
				@include font-dpr(18px);
				text-align: center;

			}
			.alert-content{
				padding-bottom: 0.46875rem;
				@include font-dpr(12px);
				color: #666;
			}
			.alert-btn{
				height: 1.25rem;
				line-height: 1.25rem;
				width: 80%;
				margin-left: auto;
				margin-right: auto;
				border-radius: 6px;
				text-align: center;
				@include font-dpr(18px);
				color: #ffffff;
				background-color: #02c09d;

			}
		}
	}
}
.bounce-transition {
  display: inline-block; /* 否则 scale 动画不起作用 */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
    // opacity: 0.5;
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    // opacity: 0.5;
  }
  100% {
    transform: scale(0);
  }
}
</style>
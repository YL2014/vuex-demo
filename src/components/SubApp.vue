<template>
  <div class="sub-wrapper">
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
	<nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from './NavFooter.vue'
import store from '../vuex/store'
export default {
	components: {
		NavFooter
	},
  store
}
</script>
<style lang="sass">
@import "../assets/base.scss";
@import "../assets/ui.scss";
.sub-wrapper{
  padding-bottom: 1.875rem;
}

</style>

<template>
  <div class="wrapper">
    <!-- main view -->
    <router-view>
    </router-view>
  </div>
</template>
<script>
import store from '../vuex/store'

export default {
  store
}
</script>
<style lang="sass">
	.wrapper{
		// height: 100%;
		// overflow-y: scroll;
		// padding-bottom: 1.875rem;
	}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './router'
import App from './components/App.vue'

Vue.use(Router)

// routing
const router = new Router({
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})

configRouter(router)

sync(store, router)

router.redirect({
	'/': '/app/home',
	'*': '/app/home'
})

router.start(Vue.extend(App), '#app')
window.router = router

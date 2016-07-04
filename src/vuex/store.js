import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import register from './modules/register'
import forgot from './modules/forgot'
import userinfo from './modules/userinfo'
import orderlist from './modules/orderlist'
import home from './modules/home'
import subscription from './modules/subscription'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    login,
    register,
    forgot,
    userinfo,
    orderlist,
    home,
    subscription
  },
  strict: debug,
})

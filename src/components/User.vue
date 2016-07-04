<template>
  <div class="user-view" v-show="user">
    <div class="user-head">
      <img src="/static/img/account-bg.jpg">
      <div class="head-block"></div>
      <p class="head-title">我的账户</p>
      <div class="user-info">
        <p>欢迎您, {{userinfo.Mobile}}</p>
        <p>{{userinfo.NickName}}</p>
      </div>
    </div>
    <ul class="hhl_cells">
      <li class="hhl_cell list-title">
        购买列表
      </li>
      <li class="hhl_cell show-more" v-show="orderinfo.showEmpty">
        <a href="javascript:void(0)">暂无数据</a>
      </li>
      <li v-for="item in orderinfo.list" class="hhl_cell">
        <p>{{item.fdcName}}</p>
        <div>
          <span>{{item.fdiTreeAge}}年</span>
          <span>{{item.fdcSite + item.fdcArea}}</span>
          <span>{{item.fdcSerialNum}}</span>
        </div>
      </li>
      <li class="hhl_cell show-more" v-show="orderinfo.showMoreBtn">
        <a href="javascript:void(0)" @click="showMore">查看更多</a>
      </li>
      <li class="hhl_cell show-more" v-show="!orderinfo.showMoreBtn && !orderinfo.showEmpty">
        <a href="javascript:void(0)">没有更多</a>
      </li>
    </ul>
    <content-footer></content-footer>
    <div class="logout-cont">
      <a href="javascript:void(0);" v-link="{name: 'qrcode', params: {code: userinfo.Id}}">我的推广码</a>
      <a href="javascript:void(0);" @click="userLogout">退出登录</a>
    </div>
  </div>
</template>

<script>
import { getOrderList, getUserInfo, userLogout } from '../vuex/action'
import { getOrderListPage, orderList, userInfo, orderInfo } from '../vuex/getters'
import ContentFooter from './ContentFooter.vue'

export default {

  name: 'User',
  data () {
    return {
      user: {}
    }
  },
  components: {
    ContentFooter
  },
  vuex: {
    getters: {
      orderinfo: orderInfo,
      userinfo: userInfo,
    },
    actions: {
      getOrderList,
      getUserInfo,
      userLogout
    }
  },
  methods: {
    showMore () {
      this.getOrderList({pageindex:this.orderinfo.pageindex})
    }
  },
  route: {
    activate () {
      this.getUserInfo()
      this.getOrderList({})
    }
  }
}

</script>

<style lang="sass">
@import "../assets/base.scss";
// @import "../ui.scss";
@mixin head-base{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:1.25rem;
}
.user-view{
  .user-head{
    position:relative;
    img{
      width:100%;
    }
    div.head-block{
      @include head-base;
      opacity: 0.66;
      background-color: #c0a877;
    }
    p.head-title{
      @include head-base;
      line-height: 1.25rem;
      text-align: center;
      color: #fff;
      @include font-dpr(16px);
    }
    .user-info{
      position:absolute;
      top: 1.25rem;
      left: 0;
      width: 100%;
      padding-top:0.994381rem;
      padding-bottom:0.994381rem;
      text-align:center;
      color: #fff;
      p{
        line-height: 0.994381rem;
      }
      p:first-child{
        @include font-dpr(18px);
      }
      p:last-child{
        @include font-dpr(12px);
      }
    }
  }

  .list-title{
    padding-left:1.1875rem;
    line-height: 0.625rem;
    background: url(/static/img/list.png) 0.3125rem 0.3125rem no-repeat;
    background-size: 0.5625rem 0.625rem;
    @include font-dpr(14px);
    color: #2a2a2a;
  }
  .hhl_cell{
    p{
      padding-bottom: 0.25rem;
      display: inline-block;
      @include font-dpr(14px);
    }
    div{
      overflow: hidden;
      span{
        float:left;
        padding-left: 0.421875rem;
        height: 0.34375rem;
        line-height: 0.34375rem;
        color: #8a8a8a;
        @include font-dpr(12px);
      }
      span:nth-child(1){
        width: 1.140625rem;
        background: url(/static/img/treeage.png) 0 0 no-repeat;
        background-size: 0.265625rem 0.34375rem;
      }
      span:nth-child(2){
        width: 2.703125rem;
        background: url(/static/img/place.png) 0 0 no-repeat;
        background-size: 0.265625rem 0.34375rem;
      }
      span:nth-child(3){
        background: url(/static/img/code.png) 0 0 no-repeat;
        background-size: 0.265625rem 0.34375rem;
      }
    }
  }
  .show-more{
    text-align:center;
    a{
      color: #8a8a8a;
      @include font-dpr(12px);
    }
  }
  .logout-cont{
    text-align: center;
    padding: 20px 0;
    a{
      margin-left: 0.3125rem;
      margin-right: 0.3125rem;
      padding: 0.15625rem 0.3125rem;
      border-radius: 6px;
      background-color:#c0a877;
      color: #fff;
      @include font-dpr(14px);
    }
  }
}
</style>

<!-- 具有统战LOGO的整体框架 -->
<template>
  <div class="container">
    <div class="user-base--info" >
      <img :src="IMG_URL+'banner-top.png'" alt="太仓统一战线服务平台" class="banner-top--img"  />
    </div>
    <div class="user-wrapper">
      <slot></slot>
    </div>

  </div>
</template>
<script>
	import {
	      mapState
	  } from 'vuex'
export default {
  name: 'Content',
  data () {
    return {
      //
    }
  },
  computed:{
  	...mapState({
  		IMG_URL: state => state.IMG_URL
  	})
  },
  methods: {
    homeClick () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style>
  .container {
    min-height: 100vh;
    /*height: auto;*/
    display: flex;
    flex-direction: column;
    background-color: #f7f3f0;
  }
  .user-base--info {
    /*background: url("~@/assets/images/user-bg.png");*/
    /*background-size: cover;*/
    /*padding: 20px;*/

  }
  .user-name {
    text-align: center;
  }
  .user-wrapper {
    margin: 5rpx;
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
  .banner-top--img {
    width: 100%;
    display: block;
  }
  img{
    height: 60px;
  }
</style>

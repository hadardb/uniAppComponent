<!-- 用户中心头像 -->
<template>
	<view class="wrapper">
		<!-- 圆角头像 -->
		<view class="HeadPicture" :style="{width:size,height: size, borderRadius: size}">
			<img :src='imgSrc'/>
		</view>
		<view class="name" :style="{color: fontColor}">{{myFont}}</view>
	</view>
</template>

<script>
	import {
	    mapState,
	} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		props:{
			imgSize:{
				type:Number,
				default: 200
			},
			src:{
				type: String,
				default: ''
			},
			name:{
				type:String,
				default: ''
			},
			fontColor:{
				type:String,
				default: ''
			}
		},
		methods:{
		},
		computed:{
			size(){
				return this.imgSize+'rpx'
			},
			myFont(){
				return this.name || this.avatar
			},
			imgSrc(){
				return this.src || this.wxHeadimgurl
			},
			...mapState({
				binded: state => state.user.binded,		//是否绑定
				avatar: state => state.user.avatar,		//用户名
				wxHeadimgurl: state => state.user.wxHeadimgurl,	//头像
			})
		}
	}
</script>

<style lang="scss">
.wrapper{
	display: flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
	margin-top: 25rpx;
	background-color: $uni-bg-color;
	padding:20rpx;
}
.HeadPicture{
	border: 1px solid black;
	margin-bottom: 15rpx;
	overflow: hidden;
	img{
		width: 100%;
		height: 100%;
	}
}
.name{
	text-align: center;
	font-size: $uni-font-size-base;
}
</style>

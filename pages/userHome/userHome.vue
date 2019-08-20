<!-- 用户中心 -->
<template>
	<view>
		<MyContent>
			<PageTitle align='left'>用户中心</PageTitle>
			<view >
				<Picture  />
				<ul class="userList">
					<li v-for='(val,index) in userList' :key='index' @click='handelClick(val.url)'>
						<i :class='val.icon'></i>
						<view>{{val.title}}</view>
					</li>
				</ul>
				<button class="btn" @click="userOut">退出当前账号</button>
			</view>
		</MyContent>
	</view>
</template>

<script>
	import MyContent from '@/components/content'
	import PageTitle from '@/components/PageTitle'
	import Picture from '@/components/Picture'
	import { req } from '@/api/request.js'
	import {
	    mapState,
	} from 'vuex'
	export default {
		data() {
			return {
				/* 功能列表 
					title： 标题
					icon： 图标
					url： 网页地址
				*/
				userList:[	  
					{
						title:'我的积分',
						icon:'iconfont icon-wodejifen',
						url:'/pages/userPoint/userPoint'
					},
					{
						title:'我的活动',
						icon:'iconfont icon-wodehuodong',
						url:'/pages/userEvent/userEvent'
					},
					{
						title:'我的公益',
						icon:'iconfont icon-wodegongyi',
						url:'/pages/userBenefit/userBenefit'
					},
					{
						title:'参政议政',
						icon:'iconfont icon-canzhengyizheng',
						url:'/pages/userPolitics/userPolitics'
					},
					{
						title:'我的问题',
						icon:'iconfont icon-wenti',
						url:''
					},
					{
						title:'我的回答',
						icon:'iconfont icon-huida',
						url:''
					}
				]
			};
		},
		computed:{
			...mapState({
				binded: state => state.user.binded,
				avatar: state => state.user.avatar,
				wxHeadimgurl: state => state.user.wxHeadimgurl,
			})
		},
		methods:{
			handelClick(src){
				uni.navigateTo({
					url:src
				})
			},
			userOut(){
				req('/WxLoginOut').then((res)=>{
					uni.showToast({
						title: res.data.message
					})
					uni.redirectTo({
						url: '/pages/loginbind/loginbind'
					})
				})
			}
		},
		components:{MyContent, PageTitle, Picture},
		onLoad:function(){
			
		}
	}
</script>

<style lang="scss">
.userList{
	margin: 0;
	padding:0;
	li{
		text-align: center;
		margin-top: 15rpx;
		background-color: $uni-bg-color;
		padding: 20rpx;
		font-weight: bold;
		display: flex;
		justify-content:center;
		align-items:center;
		color:#085795;
		border:{
			top:1px solid #eee;
			bottom:1px solid #eee;
		}
	}
}

</style>

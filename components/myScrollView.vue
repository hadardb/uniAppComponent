<!-- 局部的加载更多模块
	 在 slot中嵌入需要显示的item即可
 -->
<template>
	<view>
		<scroll-view enable-back-to-top=true :scroll-top="scrollTop" scroll-y=true
		scroll-with-animation=true @scrolltolower='getMore' class="myScroll">
			<slot></slot>
			<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		</scroll-view>
	</view>
</template>

<script>
	import loadMore from '@/components/loadMore.vue'
	import { req } from '@/api/request.js'
	export default {
		data() {
			return {
				page:1,
				scrollTop: 0,
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			};
		},
		props:{
			date:{
				type:Array,
				default: ()=> []
			},
			myId:{
				type:String,
				default: ""
			},
			reqUrl:String,
			default:''
		},
		// props:['date','myId','reqUrl'],
		components:{loadMore},
		methods:{
			getnewsList() {//第一次回去数据
				    this.loadingType = 0;
					var reqData={}
					if(this.myId){
						reqData={id:this.myId,pageIndex: this.page, pageSize: 10}
					}else{
						reqData={pageIndex: this.page, pageSize: 10}
					}
					req(`${this.reqUrl}`,reqData).then((res)=>{
						// this.questions = res.data.content.rows
						console.log(this.date.concat(res.data.content.rows))
						this.$emit('update:date',(this.date.concat(res.data.content.rows)))
						if(res.data.content.rows<10){
							 this.loadingType = 2;
						 }
						 this.page++;
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();//得到数据后停止下拉刷新
					})
			},
			getMore(){
				if (this.loadingType !== 0) {//loadingType!=0;直接返回
				    return false;
				}
				var reqData={}
				if(this.myId){
					reqData={id:this.myId,pageIndex: this.page, pageSize: 10}
				}else{
					reqData={pageIndex: this.page, pageSize: 10}
				}
				this.loadingType = 1;
				uni.showNavigationBarLoading();//显示加载动画
				req(`${this.reqUrl}`,reqData).then((res)=>{
					 if (res.data == null) {//没有数据
						 this.loadingType = 2;
						 uni.hideNavigationBarLoading();//关闭加载动画
						 return;
					 }
					
					this.page++;//每触底一次 page +1
					this.$emit('update:date',this.date.concat(res.data.content.rows))
					this.loadingType = 0;//将loadingType归0重置
					uni.hideNavigationBarLoading();//关闭加载动画
				})
			}
		},
					// this.getnewsList()
		/* created 在onload之前 */
		mounted() {
			this.getnewsList()
		}
	}
</script>

<style lang="scss">
.myScroll{
	height: 1200rpx;
}
</style>

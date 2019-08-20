<!-- 标题 -->
<template>
	<view>
		<view  class="title" :style="{backgroundImage: 'url(' + IMG_URL + 'title-bg.png)',color: titleColor,textAlign: align}">
			<slot></slot>
		</view>
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
			titleColor:{		//标题颜色
				type:String,
				default:'#9f7000'
			},
			align:{				//标题对其方式
				type:String,
				default:'center'
			}
		},
		computed:{				//导入img前缀
			...mapState({
				IMG_URL: state => state.IMG_URL
			})
		},
		methods:{
		}
	}
</script>

<style lang="scss">
.title{
	font-size:$uni-font-size-lg;
    font-weight: bold;
    background-size: auto 100%;
    padding: 20rpx 30rpx 20rpx;
	background-repeat:no-repeat;
	background-position:left top;
	line-height: 20px;
}
</style>

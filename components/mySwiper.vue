<!-- 轮播图
	目前用于 信息超市
 -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item v-for="(val,index) in swiperInfo" :key='index' @click="handelClick(index)">
                            <view class="swiper-item">
								<img :src="val.Picture"/>
								<view class="swiper-font">
									{{val.Title}}
								</view>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
	props:{
		swiperInfo:{		//轮播图信息
			type:Array,
			default:()=> []
		},
		indicatorDots:{		//是否显示面板指示点
			type: Boolean,
			default: false
		},
		autoplay:{			//是否自动切换
			type: Boolean,
			default: true
		},
		interval:{			//自动切换时间间隔
			type: Number,
			default: 2000
		},
		duration:{			//滑动动画时长
			type: Number,
			default: 500
		},
		reqUrl:{			//请求地址
			type: String,
			default: ''
		}
	},
	methods:{
		/* 轮播图点击事件 */
		handelClick(index){
			let _slef = this
			uni.navigateTo({
				url:`/pages/swiperDetail/swiperDetail?index=${index}&reqUrl=${this.reqUrl}`
			})
		}
	}
}
</script>

<style lang="scss">
.swiper-item{
	height: 165px;
}
.swiper-font{
	position: absolute;
	bottom: 0;
	left: 0;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	background: rgba(0, 0, 0, 0.5);
    color: white;
	padding: 0 30rpx;
	line-height: 2;
	box-sizing: border-box;
	width: 100%;
	font-size:$uni-font-size-base;
}
img{
	width:100%;
	height: 100%;
}
</style>

<!-- input组件 提供为空检测 -->
<template>
	<view  class="inputItem">
		<view class="myInput">
			<view>{{title}}</view>
			<input type="number" :placeholder="myPlac" :password='password' :value='value' name="phone" maxlength=20 @input="handelInput" @blur="handelBlur"/>
		</view>
		<view class="tips" v-show="showTip">{{title}}是必须的</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showTip:false,
			};
		},
		props:{
			value:{					//值
				type: String,
				default: ''
			},
			type:{					//input类型
				type: String,
				default: 'text'
			},
			plac:{					//空白提示
				type:String,
				default: ''
			},
			name:{					//input name
				type:String,
				default: ''
			},
			maxlength:{				//长度
				type:Number,
				default: 20
			},
			title:{					// 标题名字
				type:String,
				default: ''
			},
			password:{				//是否为密码
				type:Boolean,
				default: false
			},
			canSubMit:{
				type:Boolean,
				default: false
			}
		},
		computed:{
			myPlac(){
				return this.plac || ('请输入'+this.title )
			}
		},
		methods:{
			handelBlur(){
				if(!this.value){
					this.showTip=true
				}else{
					this.showTip=false
				}
			},
			handelInput(e){
				this.$emit('input',e.detail.value)
			}
		}
	}
</script>

<style lang="scss">
.inputItem{
	padding: 10rpx 0;
	border-bottom: 1px solid $uni-border-color;
}
.myInput{
	display: flex;
	margin-top: 20rpx;
	align-items:center;
	// border-bottom: 1px solid #ff5257;;
	
	view{
		width: 20%;
	}
	input{
		width: 80%;
	}
}
.tips{
	color:#ff5257;
	margin-top: 10rpx;
}
</style>

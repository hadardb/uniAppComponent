/* 配置地址 */
export const IMG_URL = (function(){
		if(process.env.NODE_ENV === 'development'){
			return 'http://192.168.1.46:4000/images/'	// 开发环境
		}else{
			return '/static/images/' 	// 生产环境
		}
	}())
	
export const REQ_URL = (function(){
	if(process.env.NODE_ENV === 'development'){
		return 'http://xyf.idec.ac.cn/wxapi/WxPalmHal'	// 开发环境
	}else{
		return 'http://xyf.idec.ac.cn/wxapi/WxPalmHal' 	// 生产环境
	}
}())
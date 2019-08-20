import state from 'store/state.js'
export const req = (url, data={}, method='POST')=>{
	return new Promise(function(resolve,reject){
		uni.request({
		  url: state.REQ_URL + url,
		  method: method,
		  data: data,
		  success:function(data){
			  resolve({data: data.data, statusCode: data.statusCode})
		  },
		  fail: function(data){
			  console.log(data)
		  }
		})
	})
	
	
}
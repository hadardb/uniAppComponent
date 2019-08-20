import { req } from '@/api/request.js'

const state = {
  name: "小王",
  avatar: "别称",
  userId: 0,
  binded: false,
  code: "",
  userkey: null,
  wxHeadimgurl:''
}
const getters = {
  // fastLetter: (state) => {
  //   return state.userName.substr(0, 1)
  // }
}
const actions = {
	login({ commit }){
		// req('/WxGetUserInfoByOpenId','','POST').then((res)=>{
		// 	commit('SET_NAME',res.data.content.Name)
		// 	commit('SET_BINDED',res.data.content.BindPhone)
		// 	commit('SET_AVATAR',res.data.content.UserInfoName)
		// 	commit('SET_USERID',res.data.content.UserId)
		// 	commit('SET_IMG',res.data.content.wxHeadimgurl)
		// })
	},
}
const mutations = {
  SET_NAME (state, params) {
    state.name = params
  },
  SET_BINDED (state, params) {
    state.binded = params
  },
  SET_AVATAR (state, params) {
    state.avatar = params
  },
  SET_USERID (state, params) {
    state.userId = params
  },
  SET_CODE (state, params) {
    state.code = params
  },
  SET_USERKEY (state, params) {
    state.userkey = params
  },
  SET_IMG (state, params) {
    state.wxHeadimgurl = params
  }
}
export default {
  // namespaced: true,  // 开启命名空间，在文件中调用该模块时需要声明模块名
  state,
  getters,
  actions,
  mutations
}

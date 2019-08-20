import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import user from 'store/module/user.js'


Vue.use(Vuex)

export default new Vuex.Store({
	state,
	modules: {
		user
	}
})
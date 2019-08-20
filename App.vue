<script>
	// import { globalData } from 'common/globalData.js'
	// import { myMock } from 'common/myMock.js'
	import {
	    mapState,
	    mapMutations,
		mapActions
	} from 'vuex'
	export default {
		// globalData: myMock,
		onLaunch: function() {
			console.log('App Launch')
			this.login()
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed:{
			...mapState({
				name: state => state.user.name,
				IMG_URL: state => state.IMG_URL
			})
		},
		methods:{
			...mapMutations([
				'SET_NAME'
			]),
			...mapActions([
			 'login'
			]),
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

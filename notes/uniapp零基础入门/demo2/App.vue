<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.setTabBarStyle({
				color: '#00ced1'
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

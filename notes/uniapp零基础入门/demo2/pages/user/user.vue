<template>
	<view>
		<view @click="clickUser">用户信息</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			clickUser() {
				uni.removeTabBarBadge({
					index:2
				})
			}
		},
		onLoad() {
			uni.setTabBarItem({
				index: 2,
				text: 'user'
			})
			// uni.hideTabBar()
			uni.setTabBarBadge({
				index:2,
				text:'3'
			})
			
			// uni.showTabBarRedDot({
			// 	index:1
			// })
			
			console.log('用户页面', uni.getStorageSync('mykey'))
			
		}
	}
</script>

<style lang="scss">

</style>

<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'js操作的title'
			})
			
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#00bfff",
			})
			
			uni.showNavigationBarLoading()
			
			setTimeout(()=>{
				uni.hideNavigationBarLoading()
			}, 1500)
		}
	}
</script>

<style>

</style>

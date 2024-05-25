<template>
	<view>
		<view class="item">myitem自定义组件</view>
	</view>
</template>

<script>
	export default {
		name:"myitem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.item {
	width: 200rpx;
	height: 200rpx;
	background: orange;
	color: yellowgreen;
	border-radius: 10rpx;
}
</style>
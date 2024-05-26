<template>
	<view class="out">
		<view class="row" v-for="item in listData" :key="item.id" @click="clickItem(item.id)">
			<view class="title">{{item.id}} - {{item.title}}</view>
			<view class="content">{{item.body}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [],
			};
		},
		methods: {
			getListData() {
				uni.request({
					url:'https://jsonplaceholder.typicode.com/posts',
					success: res=>{
						this.listData=res.data
					}
				})
			},
			clickItem(id) {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			}
		},
		onLoad() {
			this.getListData()
		}
	}
</script>

<style lang="scss">
.out {
	padding: 50rpx 30rpx;
	.row {
		padding: 20rpx 0;
		border-bottom: 1px dotted #e4e4ee;
		.title {
			font-size: 40rpx;
			padding-bottom: 15rpx;
			color: #333;
		}
		.content {
			font-size: 28rpx;
			color: #777;
		}
	}
}
</style>

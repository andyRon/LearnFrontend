<template>
	<view class="content">
		<navigator url="/pages/demo/demo">跳转到demo</navigator>
		<image class="logo" src="/static/logo.png" @click="clickimg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		
		<view class="box" @click="clcikBox"></view>
		-------
		<view class="box" @click="clcikBox2">从底部向上弹出操作菜单</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				arr: ['西游记','三国演义','红楼梦','水浒传'],
			}
		},
		onLoad() {
			// 不会主动消失
			// uni.showLoading({
			// 	title:'数据加载中...',
			// 	mask:true
			// })
			
			// setTimeout(()=>{
			// 	uni.hideLoading()
			// }, 2000)
		},
		methods: {
			clickimg() {
				uni.showToast({
					title:'发送失败',
					// icon:'success',
					image:'/static/logo.png',
					mask: true,
					duration:1500,
				})
				
				setTimeout(()=>{
					uni.navigateTo({
						url:'/pages/demo/demo'
					})
				}, 1500)
			},
			clcikBox() {
				uni.showModal({
					title:'手机验证',
					// content:'继续进入相关页面',
					// showCancel: false,
					cancelText:'cancel',
					cancelColor: '#4682b4',
					success:res=> {
						console.log(res)
						if(res.confirm) {
							uni.navigateTo({
								url:'/pages/demo/demo'
							})
						} else {
							uni.showToast({
								title:'取消',
								icon:'none'
							})
						}
					},
					fail: (err) => {
						console.log(err)
					}
					
				})
			},
			clcikBox2() {
				// let that=this
				uni.showActionSheet({
					itemList:this.arr,
					// success: function(res) {  // 这种写法中this不是指向最外层，指向的uni.showActionSheet
					// 	console.log(that.arr[res.tapIndex])
					// },
					
					success:(res) => {  // 箭头函数中this指向最外层
						console.log(res)
						console.log(this.arr[res.tapIndex])
						
					}
					
				})
			}
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.box {
		width: 300rpx;
		height: 300rpx;
		background-color: hotpink;
	}
</style>

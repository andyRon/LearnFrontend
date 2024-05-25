<template>
	<view>
		<view>-----弹出框样式-----</view>
		<view class="box" :style="{height: state?'300rpx':'0'}"></view>
		<button size="mini" @click="onclose">关闭</button>
	</view>
</template>

<script>
	export default {
		name:"mypop",
		data() {
			return {
				
			};
		},
		props: {
			state: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onclose() {
				// 子组件中不能直接修改父组件传过来的值
				// this.state=false
				// this.$emit('stateEve', false)
				
				// 通过.sync简化父子组件间通信，不需要自定义事件了
				console.log(456)
				this.$emit("update:state", false)
			}
		}
	}
</script>

<style lang="scss">
.box {
	width: 300rpx;
	height: 300rpx;
	background: pink;
}
</style>
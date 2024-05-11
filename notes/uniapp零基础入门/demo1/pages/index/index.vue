<template>
	<view class="box">
		<h1>uniapp<span class="row">零基础</span>入门</h1>
		<view>从基础到进阶</view>
		<h2>标题二加粗</h2>
		
		<view class="box2" :style="{background: bgcolor}" @click="clickBg">
			{{num}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgcolor: "#c00",
				num: 0
			};
		},
		methods: {
			clickBg() {
				this.num++
				let color = "#" + String(Math.random()).substr(3,6)
				this.bgcolor = color
			}
		}
	}
</script>

<style lang="scss">
.box {
	height: 100px;
	background: pink;
	h1 {
		font-size: 40px;
		color: red;
		.row {
			font-style: italic;
		}
	}
}
.box2 {
	height: 300rpx;
	width: 300rpx;
}
</style>

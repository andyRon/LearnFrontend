<template>
	<view>
		<pubTitle :title='about' ></pubTitle>
		
		<view>about页面</view>
		<navigator url="/pages/index2/index2">首页</navigator>
		<navigator url="/pages/list/list">列表页面</navigator>
		
		--------
		<myevent title="组件间的传值" @myeve="onmyeve" @click.native="onClick"></myevent>
		----------
		<button @click="clickBtn">开启{{mystate}}</button>
		<!-- <mypop :state="mystate" @stateEve="onStateEve"></mypop> -->
		<mypop :state.sync="mystate" ></mypop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				about: '我们',
				mystate: false
			};
		},
		methods: {
			onmyeve(e) {
				console.log(e)
			},
			onClick() {
				console.log(12345)
			},
			clickBtn() {
				this.mystate=true
			},
			// onStateEve(e) {
			// 	console.log(e)
			// 	this.mystate=e
			// }
		},
		created() {
			console.log('这是about的created')
		},
		mounted() {
			console.log('这是about的mounted')
		}
		
	}
</script>

<style lang="scss">

</style>

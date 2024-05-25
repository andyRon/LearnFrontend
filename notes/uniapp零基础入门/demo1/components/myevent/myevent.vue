<template>
	<view>
		{{title}}
		<view>
			<input type="text" placeholder="请输出...." @input="onInput"/>
		</view>
	</view>
</template>

<script>
	export default {
		name:"myevent",
		data() {
			return {
				
			};
		},
		props: {
			title: {
				type: String,
				default: "默认标题"
			}
		},
		methods: {
			onInput(e) {
				// console.log(e.detail.value)
				// 子组件通过事件向父组件传值
				this.$emit('myeve', {val: e.detail.value, time: Date.now()})
			}
		}
	}
</script>

<style lang="scss">

</style>
<template>
	<view>
		
		<myitem></myitem>
		
		
		<form @submit="onSubmit">
			<view class="row">
				<input type="text" name="username"/>
			</view>
			<view class="row">
				<textarea name="content"></textarea>
			</view>
			<view class="row">
				<radio-group name="gender">
					<radio value="男">男</radio>
					<radio value="女">女</radio>
					<radio value="保密" checked>保密</radio>
				</radio-group>
			</view>
			<view class="row">
				<picker :range="options" name="shcool" :value="selectValue" @change="pickerChange">
					<view>点击选择学历: {{options[selectValue]}}</view>
				</picker>
			</view>
			<view class="row">
				<button form-type="submit" type="primary">提交表单</button>
				<button form-type="reset">重置表单</button>
			</view>
			{{ obj }}
		</form>
		
		<view class="row">
			<input type="text" v-model="title"/>
			<view>原标题：{{title}}</view>
			<view>修改后：{{changeTiltle}}</view>
		</view>
		<view class="row">
			<input type="text" v-model='num1'/>
			<input type="text" v-model='num2'/>
			<view>相加结果：{{sum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: null,
				options: ['小学', '中学', '大学', '研究生'],
				selectValue: 2,
				title: '',
				num1: '',
				num2: '',
			};
		},
		methods: {
			onSubmit(e) {
				this.obj = e.detail.value
				this.obj.school = this.options[this.selectValue]
				console.log(this.obj)
			},
			pickerChange(e) {
				this.selectValue=e.detail.value
			},
		},
		computed: {
			changeTiltle() {
				return this.title.toLocaleUpperCase()
			},
			sum() {
				return parseInt(this.num1) + parseInt(this.num2)
			}
		}
		
	}
</script>

<style lang="scss">
input, textarea { border: 1px solid #eee;}
.row {
	padding: 20rpx 0;
}
</style>

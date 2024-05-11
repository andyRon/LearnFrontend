<template>
	<view class="out">
		
		<navigator url="/pages/list/list">新闻列表</navigator>
		<navigator url="/pages/list/list" open-type="reLaunch">新闻列表</navigator>
		
		<navigator url="/pages/about/about" open-type="redirect">关于我</navigator>
		
		<video src="/static/images/birds.mp4" autoplay muted loop initial-time="3"></video>
		
		<image src="/static/images/pic4.jpg" class="myimg"></image>
		<image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png" ></image>
		<image src="../../static/images/pic1.jpg" class="mypic"  mode="aspectFill"></image>
		
		<view class="box">view替换的是div</view>
		<div class="block"></div>
		<icon type="success" size="36"></icon>
		<icon type="download" size="36"></icon>
		<view></view>
		<text selectable user-select>text标签替换span</text>
		<text space="ensp">vue  &gt;  js</text>
		
		<scroll-view class="scroll" scroll-x scroll-y>
			<view class="group">
				<view class="item">121321</view>
				<view class="item">121321</view>
				<view class="item">121321</view>
				<view class="item">121321</view>
				<view class="item">121321</view>
				<view class="item">121321</view>
			</view>
		</scroll-view>
		
		<swiper class="swiper" circular autoplay interval="2000" duration="200" indicator-dots indicator-color="#fff" indicator-active-color="#4cd964">
			<swiper-item class="item">
				<image src="/static/images/pic1.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="item">
				<image src="/static/images/pic2.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="item">
				<image src="/static/images/pic3.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view style="height: 500rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.out {
	.box {
		width: 200px;
		height: 200px;
		background-color: pink;
	}
	.block {
		width: 750rpx;  //  750代表全屏（最初iPhone就是这个尺寸 750*1334）
		height: 200rpx;
		background-color: green;
	}
}
.scroll {
	border: 1px solid red;
	box-sizing: border-box;   // 边框变成内边框，不会出屏幕
	height: 120rpx;
	.group {
		white-space: nowrap;  // 不换行
 		.item {
			width: 220rpx;
			height: 220rpx;
			background-color: royalblue;
			display: inline-block;   // 转换为行内模块
			margin-right: 10rpx;
		}
	}
}
.swiper {
	height: 400rpx;
	margin-top: 100rpx;
	.item {
		padding: 15rpx;
		box-sizing: border-box;
		image {
			width: 100%;
			height: 400rpx;
		}
	}
}

.mypic {
	
}
</style>

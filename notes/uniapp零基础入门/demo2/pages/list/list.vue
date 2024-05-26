 <template>
	<view>
		<image :src="picurl" @click="getPicurl"></image>
		<view v-for="item in picurls"  :key="item.id">
			<image :src="item.url" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picurl:'',
				picurls: [],
			};
		},
		methods: {
			getPicurl() {
				uni.showLoading({
					title:'数据加载中....'
				})
				uni.request({
					url:'https://dog.ceo/api/breeds/image/random',
					success:res => {
						this.picurl=res.data.message
					},
					fail:err=> {
						console.log(err)
					},
					complete:res=> {
						uni.hideLoading()
					}
				})
			},
			getpicurls() {
				uni.showLoading({
					title:'数据加载中....'
				})
				uni.request({
					url:'https://api.thecatapi.com/v1/images/search',
					data: {
						limit:3
					},
					method:'get',
					success:res => {
						console.log(res)
						this.picurls=res.data
					},
					fail:err=> {
						console.log(err)
					},
					complete:res=> {
						uni.hideLoading()
					}
				})
			},
		},
		onLoad() {
			this.getPicurl()
			this.getpicurls()
		}
		
		
	}
</script>

<style lang="scss">

</style>

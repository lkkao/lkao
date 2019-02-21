<template>
	<div>
		<h1><button @click="back">返回</button>详情页 </h1>
			<!--vue-awesome-swiper-->	
			<swiper :options="swiperOption" ref="mySwiper" v-if="bannerData.length>0" >
			    <!-- slides -->
			    <swiper-slide v-for="(item,index) in bannerData" :key="index">
			    	<img :src="item" />
			    </swiper-slide>
				
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			    <div class="swiper-scrollbar"   slot="scrollbar"></div>
			    
			 </swiper>
	</div>
</template>

<script>
	export default{
		name:"goods_details",
		data(){
			return{
				bannerData:"",
				goods_id:"",
				swiperOption: {
					loop:false,
					autoplay: true,//可选选项，自动滑动
		          // some swiper options/callbacks
		          // 所有的参数同 swiper 官方 api 参数
					 pagination: {
	         			   el: '.swiper-pagination'
	        		},
	        		navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    }
	        		
		       }
		       
			}
		},
		methods:{
			loadDetails(){
				console.log(this.goods_id)
				this.$axios({
					url:"https://api.ymduo.com/item/index",
					method:"get",
					params:{
						gid:this.goods_id,//商品id
						uid:"955745" //用户id
					}
				}).then(res=>{
					console.log(res);
					this.bannerData=res.data.result.data.image;
				}).catch(err=>{
					
				})
				
			},
			back(){
				this.$store.commit("changeFoot",true);
				//route.params获取参数
				//回退上一页
				this.$router.go(-1);
			}
		},
		beforeMount(){
			//页面加载前 隐藏脚步
			this.$store.commit("changeFoot",false);
		},
		mounted(){
			//接受到传过来的id
			this.goods_id=this.$route.params.goods_id;
//			this.$router.push()
			console.log(this.goods_id)
			this.loadDetails();
			
		}
	}
</script>
<!--scoped 样式只在当前组件生效 -->
<style scoped >
	.swiper-container{
		width: 100%;
		height: 300px;
	}
	.nav{
		
	}
	.swiper-container img{
		width: 100%;
		height: 300px;
	}
</style>
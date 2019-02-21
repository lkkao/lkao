<template>
	<div>
		<div class="heading">
		<p class="jt" @click="rutes"></p>
		<span class="zt">商品详细</span>
		</div>
		   
		<div  class="lb">
			<swiper :options="ww" style="width: 100%;height: 100%;">
		      <swiper-slide style="width: 100%;height: 100%;"  v-for="(item,index) in lbData" :key="index">
		      	<img :src="item.imagePath" class="lbimgs"/>
		      </swiper-slide>
		    </swiper>
		</div>
		<div class="rmb">
		<span>¥</span>
		<span>{{rebData.price}}</span>
		<span>{{rebData.name}}</span>
		<span>{{rebData.remark}}</span>
		</div>
		<div class="tk">
			<span><i></i>正品保证</span>
			<span><i></i>七天退款</span>
		</div>
	    <div class="sx">
	    	<span><i></i>上拉查看商品详情</span>
	    </div>
	    <div class="zzz">
	    	<img v-for='(item,index) in imglist ' :src="item" :key="index"/>
	    </div>
	</div>
	 
</template>

<script>
	export default {
		name:"fenxq",
		data(){
			return{
				id:"",
				lbData:"",
				ppData:"",
				rebData:"",
				imglist:'',
				ww: {
					//					autoplay: true,//可选选项，自动滑动
					slidesPerView: 1,
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
				}
			}
		},
		methods:{
			rutes(){
				this.$store.commit("changeFoot",true);
				this.$router.go(-1);
			},	
			loadDetails(){
				this.$axios({
					url:"http://lead.mumenjoy.com/shop/0/1/goods1001",
					method:"post",
					data:{
						"body":"{\"goodsId\":"+this.id+"}"
					}
				}).then(res=>{
					console.log(res)
					this.lbData=res.data.body.goods.imageList;
					this.ppData=res.data.body.goods.content;
					this.rebData=res.data.body.goods;
					console.log(this.rebData)
					console.log(this.ppData.replace(/\<p\>|\<\/p\>/g,""))
					var a=this.ppData.replace(/\<p\>|\<\/p\>/g,"")
					var b=a.match(/http\:\/\/img\.mumenjoy\.com\/uploads\/goodspic\/\w*((\.jpg)|(\.png))/g)
					console.log(b)
					this.imglist=b;
				}).catch(err=>{
					
				})
			}
		},
		mounted(){
			//			接受传过来的ID
			this.id = this.$route.params.id;
			console.log(this.id)
			this.loadDetails();
		}
	}
</script>

<style>
	.heading{
		width: 100%;
		height: 50px;
		position: relative;
		border-bottom: 1px solid #969896;
		background: #fafafa;
	}
	.jt{
		position: absolute;
		display: inline-block;
		background: url(../../static/img/1111.png.png)no-repeat center;
		width: 40px;
		height: 40px;
		top: 0;bottom: 0;
		margin: auto;
		
	}
	.zt{
		width: 30%;
		height: 40px;
		display: inline-block;
		font-size: 18px;
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		margin: auto;
		text-align: center;
		line-height: 40px;
	}
	.lb{
		width: 100%;
		height:250px;
		
	}
	.lbimgs{
		width: 100%;
		height: 100%;
	}
	.rmb{
		width: 100%;
		padding: 20px 10px;
		box-sizing: border-box;
		background: #fafafa;
	}
	.rmb span{
		
		padding: 5px 0;
		box-sizing: border-box;	
	}
	.rmb span:nth-child(1){
		font-size: 13px;
		color:#ff2a60; 
		display: inline-block;
	}
	.rmb span:nth-child(2){
		font-size: 22px;
		color:#ff2a60; 
		display: inline-block;
	}
	.rmb span:nth-child(4){
		font-size: 13px;
		color:#585858; 
	}
	.tk{
		width: 100%;
		padding: 10px 10px;
		box-sizing: border-box;
	}
	.tk span{
		display: inline-block;
	}
	.tk span i{
		width: 18px;
		height: 18px;
		background: url(../../static/img/3333.jpg)no-repeat center;
		background-size: 100%;
		display: inline-block;
		
	}
	.sx{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		text-align: center;
		background: #f2f2f2;
	}
	.sx span{
		width: 100%;
		display: inline-block;
		
	}
	.sx span i{
		width: 18px;
		height: 18px;
		background: url(../../static/img/4444.jpg)no-repeat center;
		background-size: 100%;
		display: inline-block;
	}
	.zzz{
		width: 100%;
	}
	.zzz img{
		width: 100%;
		height: 100%;
		
	}
</style>
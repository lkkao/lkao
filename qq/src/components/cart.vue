<template>
	<div>
		<!--:on-refresh 下拉刷新的事件-->
		<!--:on-infinite 上拉事件-->
		<scroller  refreshText="你好"	 :on-refresh="refresh" :on-infinite="infinite"  ref="myscroller">
				<h1>购物车</h1>
				<button @click="getData">请求数据</button>
				<h1 class="goods_title">猜你喜欢</h1>
				<div class="good_list">
					<ul >
						<li v-for="(item,index) in list" :key="index" @click="turn(item.goods_id)"  :pid="item.goods_id"  >
							<div><img :src="item.image"/></div>
							<div>
								<p>{{item.goods_name}}</p>
							</div>
							<div class="price">￥{{item.price}}</div>
							<div><span>月销量{{item.pay_num}}</span><span>免邮费</span></div>
						</li>
						
						
					</ul>
				</div>
		</scroller>
	</div>
</template>

<script>
	export default{
		name:"cart",
		data(){
			return {
				list:"",
				noData:""
			}
		},
		methods:{
			refresh(){
				//下拉刷新函数
				//向后台请求新的数据--请求后停止
				this.loadCart();
			
				console.log("下拉刷新了")
				
			},
			infinite(done){
				//上拉加载函数
				 if(this.noData) {//如果没有数据停止
				    setTimeout(()=>{
				      this.$refs.myscroller.finishInfinite(2);
				      })
				    return;
				 }
					console.log("上拉加载了")
					 this.$refs.myscroller.finishInfinite(false);
					 
						//请求列表数据
				this.$axios({
					method:"post",
					url:"https://api.ymduo.com/Interface/recommendlists",
					data:{
						pf:1, 
						p:1
					}
				}).then(res=>{
					console.log(res);
//					this.list=res.data.result.data;
					//把新调取的数据连接原来的数据
					this.list=this.list.concat(res.data.result.data);
					//停止上拉
					 this.$refs.myscroller.finishInfinite(false);
					  done()
					
				}).catch(err=>{
					
				})
				//当数据大于100 
					if(this.list.length>100){
						this.noData="没有数据了";
					}
					
			},
			
			
			turn(goods_id){
				//跳转到详情页  把商品id传过去
				this.$router.push({name:"Details",params:{goods_id:goods_id}});
			},
			loadCart(){
					//请求列表数据
				this.$axios({
					method:"post",
					url:"https://api.ymduo.com/Interface/recommendlists",
					data:{
						pf:1, 
						p:1
					}
				}).then(res=>{
					console.log(res);
					this.list=res.data.result.data;
						//停止下拉
					this.$refs.myscroller.finishPullToRefresh();
				}).catch(err=>{
					
				})
			},
			getData(){
				this.$axios({
					method:"get",//请求方式,
					url:"https://api.ymduo.com/Home/FootNews/lists",//请求地址,
					params:{},//get方式发送的数据
//					data:{}//post方式发送数据

				}).then(res=>{
					//res--返回的数据
					console.log(res);
				}).catch(err=>{
//					err--请求错误信息
				})
				
				
			}
		},
		mounted(){
			this.loadCart();
			
		}
		
	}
</script>

<style>
	.goods_title{
		width: 100%;
		height: 60px;
		padding-left: 30px;
		box-sizing: border-box;
		border-bottom: 1px solid red;
	}
	.good_list ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
	.good_list ul img{
		width: 337px;
		height: 337px;
		border-radius: 10px;
	}
	.good_list ul li{
		width: 337px;
		height: 540px;
	}
	.price{
		color: red;
	}
	.good_list ul li div {
		margin-top: 10px;
	}
	.good_list ul li div:nth-of-type(2){
		font-size: 28px;
	}
	.good_list ul li div:last-child{
		display: flex;
		justify-content: space-between;
	}
</style>
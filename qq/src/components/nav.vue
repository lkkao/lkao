<template>
	<div v-if="$store.state.footstyle">
		<div class="nav">
				<ul>
					<li v-for="(item,index) in navlist" :key="index" @click="changeNav(index)">
						<router-link :to="item.url">
							<i :class="item.isactive?item.iconactive:item.icon"></i>
							<p>{{item.title}}</p>
						</router-link>
					</li>
			</ul>	
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store';
	
	//脚步
	export default{
		name:"navs",
		store,
		data(){
			return {
				navlist:[
					{title:"首页",url:"/home",icon:"iconfont icon-shouye",iconactive:"iconfont icon-CombinedShape",isactive:true},
					{title:"分类",url:"/fenlei",icon:"iconfont icon-leimupinleifenleileibie",iconactive:"iconfont icon-leimupinleifenleileibie2",isactive:false},
					{title:"购物车",url:"/cart",icon:"iconfont icon-gouwuchekong",iconactive:"iconfont icon-gouwucheman",isactive:false},
					{title:"我的",url:"/my",icon:"iconfont icon-ziyuan",iconactive:"iconfont icon-wode",isactive:false},
					
				]
			}
		},
		methods:{
			changeNav(index){
				for(var i=0;i<this.navlist.length;i++){
					this.navlist[i].isactive=false;
				}
				this.navlist[index].isactive=true;
			}
		}
	}
</script>

<style>
	.nav{
		width: 100%;
		height: 90px;
		position: fixed;
		background: skyblue;
		bottom: 0;
		left: 0;
		z-index: 999;
	}
	.nav ul{
		height: 90px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.nav ul li{
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
	}
	.nav ul li i{
		font-size: 40px;
	}
	.nav ul li p{
		font-size: 18px;
	}
	.nav ul li p a{
		color: black;
	}
	/*router-link-active 当前被激活的路径 */
	.nav ul li .router-link-active{
		color: red;
	}
</style>
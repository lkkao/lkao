<template>
	<div>
		<h1>我的组件</h1>
		<!--$route.params 获取所有的参数 -->
		<h1>{{$route.params.userId}}</h1>
		<h1>{{$route.params.age}}</h1>
		 <!--vue-cli less的使用
		 	1.安装   npm install less less-loader --sava-dev
		 	2.在build--webpack.base.conf.js  rules:[] 
		 	 	{

                    test: /\.less$/,

                    loader: "style-loader!css-loader!less-loader"    

                }
		 	 --->
		<div id="box">
			<ul>
				<li>111</li>
				<li>222</li>
				<li>333</li>
			</ul>
		</div>
		<h1>{{mydata}}</h1>
		
		<!--trastion-->
		 <!--<transition name="fade">
			<p  v-if="vflag">显示隐藏</p>
		</transition>-->
		 <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideInRight">
			<p  v-if="vflag">显示隐藏</p>
		</transition>
		<button @click="vflag=!vflag">切换</button>
		<input type="text" name="" id="" value="" />
		<!--安装 npm i vuex --save  -->
		<!--vuex  vue的公用状态管理   多个页面使用了共同的数据  -->
		<hr />
		<h1>{{$store.state.count}}</h1>
		<button @click="add()">点击增加10</button>
		<button @click="$store.commit('add',100)">增加100</button>
	</div>
</template>

<script>
	//导入vuex的store
	import store from '../vuex/store';
	
	export default{
		name:"my",
		data(){
			return {
				mydata:"我的组件的数据",
				vflag:true
			}
		},
		//配置store
		store,
		methods:{
			callback(){
				alert("我的组件的函数")
			},
			add(){
				//触发mutations里的函数
				this.$store.commit("add",10);
			}
		},
		mounted(){
			console.log(this.$route.params)
			//可以把state的数据重新赋值
//			this.$store.state.count="2";
//			this.$axios({
//				url:"http://api.xzhuangshop.com/index/you-like-products",
//				method:"post",
//				data:{}
//			}).then(res=>{
//				console.log(res);
//			})
//		crosse Origin---不允许跨域
		
//			this.$axios({
//				url:"http://api.xzhuangshop.com/second-kill/get-second-kill-product",
//				method:"post",
//				data:{"appSystemVersion":"4.0.0","userId":"(null)","phoneModel":"iPhone 7 Plus","phoneSystemVersionCode":"iOS 12.1.2","brand":"Apple","phoneType":"iOS","activity_id":"1337","machineCode":"48672AD5-2FAC-491C-9ECB-7BA054BBF635","userToken":""}
//			}).then(res=>{
//				console.log(res);
//			})
				this.$axios({
					url:"./static/ten-logo.json",
					method:"get"
					
				}).then(res=>{
					console.log(res);
				})
			
		}
		
	}
</script>
<!--lang="less" 使用less -->
<!--scoped 只在当前组件生效 子组件也不生效  -->
<style  lang="less">
	
	@color:red;
	#box{
		width: 100%;
		height: 200px;
		background: @color;
		ul{
			display: flex;
			justify-content: space-around;
		}
	}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
	
</style>
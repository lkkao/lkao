<template>
	<div>
		<h1>分类</h1>
		<h1>{{$store.state.count}}</h1>
		<h1>{{$route.query.sex}}</h1>
		<!--提供给子路由切换的视图 -->
		<router-link to="/fenlei/coat">衣服</router-link>
		<router-link to="/fenlei/shose">鞋子</router-link>
		
		<transition :enter-active-class="mmm" >
			<router-view />	
		</transition>
		
		<h1>{{mmm}}</h1>
		<!--ref  标注元素和组件-->
		<div id="mybox" ref="mybox">盒子</div>
		<my-com ref="mycom"></my-com>
		<img v-for="(item,index) in imgsrc"  :src="item"/>
	</div>
</template>

<script>
	//导入我的组件
	import My from './my'
	import store from '../vuex/store'
	export default{
		name:"fenlei",
		data(){
			return {
				transitionName:"",
				imgsrc:[
				//数据中使用assets下的图片 需要require()
					require("../assets/logo.png"),
					require("../assets/logo.png")
				]
			}
		},
		store,
		//注册
		components:{
			myCom:My
		},
		watch:{
			
		},
		mounted(){
//			var mybox=document.getElementById("mybox");
			var mybox=this.$refs.mybox;
			console.log(mybox)
			//ref获取组件
			var mycom=this.$refs.mycom;
			console.log(mycom)
//			mycom.callback();
			console.log(mycom.mydata);
			mycom.mydata="你的数据";
			
			
		},
		props:["mmm"]
	}
</script>

<style>
	 .child-view { 
        　　width: 100%; 
        　　height: 100%; 
        　　transition: all .5s cubic-bezier(.55,0,.1,1); 
      }
  .slide-left-enter-active, .slide-left-leave-active { 
   　　transition: opacity .5s;
   } 
   .slide-left-enter, .slide-left-leave-to { 
   　 opacity: 0; 
   }
</style>
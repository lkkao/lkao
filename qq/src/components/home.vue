<template>
	<div>
		<h1>首页</h1>
		<!--<router-link to="/my/888">
			跳转到我的
		</router-link>-->
		<!--name去跳转路由 -->
		<router-link :to="{name:'My',params:{userId:'999',userName:'李四',age:23}}">
			name跳转我的组件
		</router-link>
		
		<button @click="turn">跳转分类组件</button>
		<button @click="go">返回上一页面</button>
		<div id="box">
			你好
			<ul>
				
			</ul>
		</div>
		<div id="login">
				用户名：<input type="text" v-model="userName" />
				<br />
				密码：<input type="text" v-model="password" />
				<br />
				验证码：<input type="text" v-model="veri"  /><span>{{getVeri}}</span>
				
				<button @click="login">登录</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"home",
		data(){
			return{
				userName:"",
				password:"",
				veri:"",//发送的验证码
				getVeri:""//获取到的验证码
			}
		},
		methods:{
			login(){
			//判断验证码
			this.$axios({
				method:"get",
				url:"/users/veri",
				params:{
					action:"checkVeri",
					veri:this.veri
				}
			}).then(res=>{
				console.log(res)
				if(res.data.success){
					//登录方法
					this.$axios({
							method:"post",
							url:"/users/userLogin",
							data:{
								userName:this.userName,
								password:this.password
							}
						}).then(res=>{
								console.log(res);
						}).catch(err=>{
									
						})
				}else{
					alert("验证码错误")
				}
				
			})
				
			
				
				
			},
			loadVeri(){
				//获取验证码的方法
				this.$axios({
					url:"/users/veri",
					method:"get",
					params:{
						action:"getVeri"
					}
				}).then(res=>{
					//存储返回的验证码
					this.getVeri=res.data.veri;
				}).catch(err=>{
					
				})
				
			},
			turn(){
				
//				location.href="#/fenlei/999"
				// fenlei---path
//				 this.$router.push('fenlei');
//		  this.$router.push({ path: 'fenlei' })

// 	 	this.$router.push({ name: 'Fenlei', params: { Fid:666,userId: 123,userName:"张三" }})
 	 	// 手动添加参数  ?plan=private  #/fenlei?plan=private&sex=男
        this.$router.push({ path: '/fenlei', query: { plan: 'private',sex:'男' }})
			},
			go(){
				//返回上一层       n 整数   -1上一个页面   
				this.$router.go(-1);
				
			}
		},
		mounted(){
			this.loadVeri();
		}
	}
</script>

<style>
	#box{
		width: 2rem;
		height: 2rem;
		background: red;
	}
	#box ul{
		width: 238px;
		height: 60px;
		background: skyblue;
	}
	#login{
		width: 100%;
		height: 300px;
		background: skyblue;
	}
	
</style>
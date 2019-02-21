<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  	 <login-com></login-com>
  </div>
</template>

<script>
	//单个导入的aa函数
	import {aa} from '../router/a'
	//单个导入的x变量
	import {x} from '../router/a'
	//导入export default 下的对象
	import  routera from "../router/a";
	//导入登录组件
	import loginCom from './login'
	
	console.log(x);
	console.log(aa);
	console.log(routera)
//	routera.aa();
//	aa();

//每个组件默认全部导出
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我是helloWorld组件'
    }
  },
  //注册组件
  components:{
 		 	loginCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

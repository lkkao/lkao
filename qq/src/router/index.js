import Vue from 'vue'
import Router from 'vue-router'
// @--在webpack中把@定义为src文件夹 
import HelloWorld from '@/components/HelloWorld'
//导入组件
import Home from '@/components/home'
import Fenlei from '@/components/fenlei'
import Cart from '@/components/cart'
import My from '@/components/my'

//导入衣服和鞋子组件
import Coat from '@/components/fenlei/coat'
import Shose from '@/components/fenlei/shose'

//导入详情页
import GoodsDeatils from '@/components/goods_details'

//Vue.使用路由插件
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      //重定向到首页
			redirect:"/home"
    },
    {
    	path:"/home",
    	name: 'Home',
    	component:Home
    },
     {
    	path:"/fenlei/:Fid?",
    	name: 'Fenlei',
    	component:Fenlei,
    	//二级路由
    	children:[
	    		{//衣服路由
	    			path:"coat",
	    			name:"Coat",
	    			component:Coat
	    		},
	    		{//鞋子路由
	    			path:"shose",
	    			name:"Shose",
	    			component:Shose
	    		},
    	]
    },
     {
    	path:"/cart",
    	name: 'Cart',
    	component:Cart
    },
     {
     	//动态的参数设置 :userId  :userName
     	//参数 ?  非必传参数 
    	path:"/my/:userId?/:userName?",
    	name: 'My',
    	component:My,
    	meta:{
    		keep_alive:true
    	}
    },
    {
    	path:"/details",
    	name:"Details",
    	component:GoodsDeatils
    }
    
  ]
})

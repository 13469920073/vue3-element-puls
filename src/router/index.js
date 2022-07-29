import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
 {
  path:'/',
  name:'Login',
  component:()=>import(/*webpackChunkName:'Login'*/'@/page/login/index.vue')
 },
 {
  path:'/home',
  name:'Home',
  component:()=>import(/*webpackChunkName:'Home'*/'@/page/home/index.vue'),
  redirect: '/home/user-page',//重定向
  children:[
    {
      path:'/home/user-page',
      name:'UserPage',
      component:()=>import(/*webpackChunkName:'UserPage'*/'@/page/user-page/index.vue'),
    },
    {
      path:'/home/order',
      name:'Order',
      component:()=>import(/*webpackChunkName:'Order'*/'@/page/order/index.vue'),
    }
  ]
 }
]
const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
  history: createWebHashHistory(),
  routes, 
})
export default router
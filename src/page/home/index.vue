<template>
 <div style="height:100vh;width:100vm;background-color: #ececec">
    <el-container>
      <el-header class="header_">
        <div>我爱学习</div>
        <div @click="SignOut">退出</div>
      </el-header>
      <el-container >
        <el-aside width="150px"  class="aside_left"  >
            <el-menu
            :default-active="age"
            class="el-menu-demo"
            mode="vertical"
            text-color="#000000"
            active-text-color="#ffd04b"
            @select="handleSelect"
            >
            <div v-for="(item,index) in list" :key='index' >
               <router-link style="text-decoration: none;" :to="{path:item.router}">
                 <el-menu-item :index="item.id" v-if="item.children.length==0">
                    <template #title>
                         <el-icon>
                           <component :is="item.icon"></component>
                         </el-icon>
                          <span>{{item.title}}</span>
                    </template>
              </el-menu-item>
               </router-link>
             
               <el-sub-menu :index="item.id"  v-if="item.children.length>0">
                   <template #title>
                     <el-icon>
                        <component :is="item.icon"></component>
                     </el-icon>
                      <span>{{item.title}}</span> 
                    </template>
                    <div v-for="(row,index_T) in item.children" :key="index_T" >
                        <router-link style="text-decoration: none;" :to="{path:row.router}">
                        <el-menu-item  :index="row.id" >
                          {{row.title}}
                        </el-menu-item>
                        </router-link >
                    </div>
              </el-sub-menu>
              </div>
            </el-menu>
        </el-aside>
        <!-- z展示其他路由 -->
         <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import {Histogram,Avatar,CreditCard,Food,Stamp} from '@element-plus/icons-vue'
import { reactive,ref ,onMounted} from 'vue'
export default {
  name:'Home',
  components:{
    Histogram,
    Avatar,
    CreditCard,
    Food,
    Stamp
  },
  setup() {
    const Router=useRouter()
    // 菜单激活事件
    const age=ref('1')
    onMounted(() => {
    age.value=JSON.parse(localStorage.getItem('menuid'))
    })
    const handleSelect=(index)=>{
      localStorage.setItem('menuid',JSON.stringify(index))
    }
    const list=reactive([
      {
        id:'1',
        icon:'Histogram',
        title:'数据分析',
        router:'',
        children:[]
      },
      {
        id:'2',
        icon:'Avatar',
        title:'用户列表',
        router:'/home/user-page',
        children:[]
      },
      {
        id:'3',
        icon:'CreditCard',
        title:'订单管理',
        router:'/home/order',
        children:[]
      },
       {
        id:'4',
        icon:'Food',
        title:'菜品管理',
        router:'',
        children:[]
      },
       {
        id:'5',
        icon:'Stamp',
        title:'员工管理',
        router:'',
        children:[
          {
            id:'5-1',
            icon:'',
            title:'员工详情',
            router:'',
            children:[]
          },
        ]
      },
    ])
    //退出
    const SignOut=()=>{
      localStorage.removeItem('token')
      Router.push({path:'/'})// 删除token 跳出登陆
    }
    

    return {
      age,
      SignOut,
      handleSelect,
      list
    }
  },
  

}
</script>
<style lang="css" scoped>
.header_{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#fff ;
}
.aside_left{
    background-color:#fff;
    text-align: center;
}

</style>>
  

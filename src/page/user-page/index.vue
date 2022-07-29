<template>
  <div class="user_page">
    <h4>用户列表</h4>
    <el-table :data="user_array" style="width: 100%">
        <el-table-column prop="time" label="注册时间"    align="center"/>
        <el-table-column prop="name" label="姓名"    align="center"/>
        <el-table-column prop="head" label="头像"    align="center">
            <template #default="scope">
                <el-image style="width:30px;height:30px"  :fit="cover"  :src="scope.row.head" :preview-src-list="[scope.row.head]" :hide-on-click-modal="true" lazy >

                </el-image>
            </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别"    align="center"/>
        <el-table-column prop="position" label="职业"    align="center"/>
  </el-table>
  <div class="Pagination_f">
     <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentchange" :current-page="page+1"/>
  </div>
  </div>
</template>
<script>
import { reactive,onMounted ,getCurrentInstance,toRefs} from 'vue'
export default {
  nams:'UserPage',
  setup() {
    //请求数据
    const {appContext}=getCurrentInstance()
    onMounted(()=>{
        userlist()
    })
    const userlist=async()=>{
        const res=await new appContext.config.globalProperties.$request(appContext.config.globalProperties.$urls.str().pulluserlist + '?page=' + list.page).modget()
        console.log(res,'______')
        list.user_array=res.data.data.result
        list.total=res.data.data.total
    }
    const list=reactive(
      {
      user_array:[],
      total:100,
      page:0
      }
    )
    //分页触发
    const currentchange=(val)=>{
          list.page=val - 1
          userlist()
    }
    return {
      ...toRefs(list),
      currentchange
    }
  }
}
</script>
<style lang="css" scope>
.Pagination_f{
  padding: 2vh 25%;
  display: flex;
    justify-items: center;
    justify-content: center;
}
  
</style>
<template>
  <div class="user_page">
    <h4>菜单管理</h4>
     <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="菜品名称">
           <el-input v-model="form.name" placeholder="请输入菜品" />
        </el-form-item>
        <el-form-item label="菜品名称">
           <el-input v-model="form.name" placeholder="请输入菜品" />
        </el-form-item>
     <el-form-item>
     <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
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
  </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
export default {
  name:'Order',
  setup() {
    const form=reactive({
            name:'1111'
    })
    const list=reactive(
      {
      user_array:[{
        time:'2022-10-4',
        name:'陈伟霆',
        head:'',
        sex:'男',
        position:'--'

      }],
      total:100,
      page:0
      }
    )
    return {
      form,
      ...toRefs(list)
    }
  }
}
</script>
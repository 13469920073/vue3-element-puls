<template>
  <div class="beijing">
    <div class="meituan-content">
      <div class="login-content">
        <div class="meituan-title">
          扫码点餐客户端
        </div>
        <!-- 账号密码输入框 -->
        <div>
          <el-form
          label-width="100px"
          :model="form"
           style="padding:50px 50px 0 0"
           >
           <div style="margin-bottom:25px">
           <el-form-item label="账号">
             <el-input  v-model="form.AcctNo" placeholder="请输入账号"/>
           </el-form-item>
           </div>
           <div>
            <el-form-item label="密码">
             <el-input  v-model="form.Password" placeholder="请输入密码"/>
            </el-form-item>
            </div>
         </el-form>
        </div>
        <!-- 登录注册切换 -->
        <div class="reg-view">
            <span @click="form.rige=='注册'?form.rige='登陆':form.rige='注册'">{{form.rige}}</span>
        </div>
        <!--  登陆按钮 -->
        <div class="denglu"> 
              <el-button v-if="form.rige=='注册'" type="success" style="padding:0 40px" @click="singin">登陆</el-button>
              <el-button  v-else type="success" style="padding:0 40px" @click="regin">注册</el-button>

        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { reactive ,getCurrentInstance} from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
  name:'Login',
  setup() {
    const Router=useRouter()
    const {appContext}=getCurrentInstance()
    const form=reactive({
        AcctNo:'',
        Password:'',
        rige:'注册'
    })
    //登陆事件
    const singin=async ()=>{
        const obj={account:form.AcctNo,password:form.Password}
        const res=await new appContext.config.globalProperties.$request(appContext.config.globalProperties.$urls.str().login,obj).modpost()
         if(res.status=='202'){
            ElMessage({
                  message: res.data.msg,
                   grouping: true,
                   type: 'error',
             })
             form.AcctNo=''
             form.Password=''

         }else{
           localStorage.setItem('token',res.data.data.token)
           Router.push(
             {
               path:'/home'
             }
           )
         }
       
    }
    //注册事件
    const regin=async()=>{   
         const obj={account:form.AcctNo,password:form.Password}
         const res=await new appContext.config.globalProperties.$request(appContext.config.globalProperties.$urls.str().register,obj).modpost()
         if(res.status=='200'){
            ElMessage({
                  message: res.data.msg?res.data.msg:'',
                   grouping: true,
                   type: 'success',
             })
         }else {
             ElMessage({
                  message: res.data.msg?res.data.msg:'',
                   grouping: true,
                   type: 'error',
             })
             form.AcctNo=''
             form.Password=''
         }
         form.rige='注册'
    }
    return{
      form,
      singin,
      regin
    }
    
  }
}
</script>
<style lang="css" scope>

  
</style>
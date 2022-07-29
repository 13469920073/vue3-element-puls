import axios from "axios";
import { Base64 } from "js-base64";
import {ElMessageBox} from 'element-plus'
import { useRouter } from 'vue-router'


//创建一个实例
const instance=axios.create({
  // baseURL:'http://element.thexxdd.cn/api/',
  timeout:6000,
  responseType:'json',
  headers:{'Content-Type':'application/json'}

})

//加密token
function Funtoken(){
  const token=localStorage.getItem('token')
  const base64=Base64.encode(token + ':')
  return 'Basic ' + base64
}

//请求拦截器
instance.interceptors.request.use(
  async config=>{
    let token=localStorage.getItem('token')
    if(token){
      config.headers.Authorization=Funtoken()//加密的token
    }
    return config
  }
  ,error=>{
  return Promise.reject(error)
})


//响应拦截器
instance.interceptors.response.use(res=>{
  return res
},error=>{
  if(error.response){
    let Errs=error.response.status//错误码
    let Msg=error.response.data.msg.msg//错误文本
    let ErrData=Errs=='401'&&'400'?Msg:'服务器发生错误'
    switch (Errs) {  
      case 401:
        //没有权限 token过期 没有携带token token错误
      ElMessageBox.alert(ErrData,'提示',{
        type: 'error',
        confirmButtonText: '确定',

      }).then(res=>{
        //跳转到首页
        localStorage.removeItem('token')
        window.location.href='/'
      }).catch(err=>{
        localStorage.removeItem('token')
        window.location.href='/'

      })
        break;
     
    }
  }
  return Promise.reject(error.response)
})
export default instance




const url='http://element.thexxdd.cn/api/'
const urls =class{
  static str(){
    //注册
    const register=`${url}register`
    //登陆
    const login=`${url}login`
    //用户列表
    const pulluserlist=`${url}pulluserlist`
    return {
      register,
      login,
      pulluserlist
    }
  }
}
export default  urls
  // request,
  

  
 

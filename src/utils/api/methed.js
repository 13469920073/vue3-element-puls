import instance from '../request/index'

const request=class{
  constructor (url,arg){
    this.url=url
    this.arg=arg
  }
 
  //post
 modpost(){
    return new Promise((resolve,reject)=>{
      instance.post(this.url,this.arg).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })

  }
  //get
  modget(){
     return new Promise((resolve,reject)=>{
      instance.get(this.url).then(res=>{
      resolve(res)
     }).catch(err=>{
       reject(err)
     })
    })
  }
}
export default request
import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  //封装方法
  get(api:string){
    return new Promise((resolve,reject)=>{
      axios.get(api)
      .then(res=>{
        if(res.status==200){
          resolve(res.data)
        }else{
          reject('状态码:'+res.status)
        }
      }).catch(err=>{
        reject('接口请求出错')
      })
    })
  }

  post(api:string,data:object){
    return new Promise((resolve,reject)=>{
      axios.post(api,data)
      .then(res=>{
        if(res.status==200){
          resolve(res.data)
        }else{
          reject('状态码:'+res.status)
        }
      }).catch(err=>{
        reject('接口请求出错')
      })
    })
  }
}

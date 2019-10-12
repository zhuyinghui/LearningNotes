import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { AxiosService } from '../../services/axios.service';

@Component({
  selector: 'app-data-com',
  templateUrl: './data-com.component.html',
  styleUrls: ['./data-com.component.scss']
})
export class DataComComponent implements OnInit {

  constructor(public http:HttpClient,public axios:AxiosService) { }

  ngOnInit() {
  }

  getData(){
    this.http.get('http://manage.zhuyinghui.shop/api/blogs')
    .subscribe(res=>{
      console.log(res)
    })
  }
  postData(){
    this.http.post('http://zhuyinghui.shop/api/messages',{
        compony: "ggg",
        content: "rrr",
        email: "fff@qq.com",
        name: "zzz",
        phone: "17775845568",
    },{
      headers:new HttpHeaders({'Content-Type':'application/json'})
    })
    .subscribe(res=>{
      console.log(res)
    })
  }
  jsonpData(){
    this.http.jsonp('http://a.itying.com/api/productlist','callback')
    .subscribe(res=>{
      console.log(res)
    })
  }
  axiosgetData(){
    this.axios.get('http://manage.zhuyinghui.shop/api/blogs')
    .then(data=>{
      console.log(data)
    })

  }
  axiospostData(){
    this.axios.post('http://zhuyinghui.shop/api/messages',{
        compony: "ggg",
        content: "rrr",
        email: "fff@qq.com",
        name: "zzz",
        phone: "17775845568",
    })
    .then(data=>{
      console.log(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-com',
  templateUrl: './header-com.component.html',
  styleUrls: ['./header-com.component.scss']
})
export class HeaderComComponent implements OnInit {

  //定义数据
  public navlist:Array<object>=[
    {
      name:'首页',path:'home'
    },
    {
      name:'页面',path:'page1'
    },
    {
      name:'页面',path:'page2'
    },
  ]
  public flag:boolean=true
  public today:any=new Date()
  constructor() { 
  }

  ngOnInit() {
  }

}

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
      name:'页面一'
    },
    {
      name:'页面二'
    },
    {
      name:'页面三'
    },
  ]
  public flag:boolean=true
  public today:any=new Date()
  constructor() { 
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

}

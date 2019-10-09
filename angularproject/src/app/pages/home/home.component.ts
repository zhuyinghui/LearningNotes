import { Component, OnInit } from '@angular/core';
//引入服务
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public msg:string="这是首页"
  public msg2:string="这是默认值"

  //初始化服务实例
  constructor(public storage:StorageService) { 
  }

  ngOnInit() {
  }

  //定义方法
  func1(e: { target: { value: string; }; }){
      this.msg=e.target.value
  }
  getGlobal(){
    //调用服务
    this.storage.getGlobalMethod();
  }
}

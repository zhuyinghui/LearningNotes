import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  public msg3:string="这是父组件传给子组件的值"
  public flag:boolean=true
  
  //定义节点
  @ViewChild('testdom',{read:ElementRef,static:false}) testdom:ElementRef

  //初始化服务实例
  constructor(public storage:StorageService) { 
  }

  ngOnInit() {
    // console.log(this.testdom.nativeElement) 报错
  }
  ngAfterViewInit(): void {
    //节点加载完成,获取节点
    console.log(this.testdom.nativeElement)
  }

  //定义方法
  func1(e: { target: { value: string; }; }){
      this.msg=e.target.value
  }
  getGlobal(){
    //调用服务
    this.storage.getGlobalMethod();
  }
  //这是传给子组件的方法
  parentFn(){
    alert('子组件调用了父组件的方法')
  }

  changeflag(){
    this.flag=!this.flag;
  }

 


}

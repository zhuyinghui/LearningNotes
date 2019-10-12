import { Component, OnInit,Input } from '@angular/core';
//父子组件传值，引入Input模块

@Component({
  selector: 'app-form-com',
  templateUrl: './form-com.component.html',
  styleUrls: ['./form-com.component.scss']
})
export class FormComComponent implements OnInit {
  
  //接收父组件传值
  @Input('msg3') msg3:string
  //接收父组件方法
  @Input('parentFn') parentFn:any

  public person:object={
    username:'',
    sex:'',
    city:'请选择',
    hobby:[],
    mark:''
  }
  
  public cities:Array<string>=[
    '请选择','长沙','湘潭','株洲'
  ]

  constructor() { }

  //生命周期函数
  ngOnChanges(): void {
    console.log('ngOnChanges--初始化输入属性，父子组件传值时会触发')
  }
  ngOnInit() {
    console.log('ngOnInit--初始化其他属性，请求接口数据')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck--组件变更触发')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit--投影内容初始化')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked--投影内容变更检测')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit--视图初始化，操作节点')
  }
  ngAfterViewChecked():void{
    console.log('ngAfterViewChecked--视图初始化检测')
  }
  ngOnDestroy():void{
    console.log('ngOnDestroy--组件被销毁')
  }
  
  

  submit(){
    console.log(this.person)
  }

}

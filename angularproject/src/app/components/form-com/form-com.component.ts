import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-com',
  templateUrl: './form-com.component.html',
  styleUrls: ['./form-com.component.scss']
})
export class FormComComponent implements OnInit {
  
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

  ngOnInit() {
  }
  submit(){
    console.log(this.person)
  }

}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
    //获取get传值
    this.router.queryParams.subscribe(params=>{
      console.log(params)
    })
    //获取动态路由传值
    this.router.params.subscribe(params=>{
      console.log(params)
    })
  }

}

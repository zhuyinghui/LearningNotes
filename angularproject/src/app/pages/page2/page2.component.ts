import { Component, OnInit } from '@angular/core'
import { Router,NavigationExtras } from '@angular/router'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  topage3(n){
    if(n===1){
      //动态路由传值
      this.router.navigate(['/page3','34543'])
    }else{
      //get传值
      let queryParams:NavigationExtras={
        queryParams:{'did':'1333'},
      }
      this.router.navigate(['/page3','333'],queryParams)
    }
  }
}

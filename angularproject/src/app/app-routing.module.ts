import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { ErrpageComponent } from './pages/errpage/errpage.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'page1',component:Page1Component
  },
  {
    path:'page2',component:Page2Component
  },
  {
    path:'page3',component:Page3Component
  },
  {
    //匹配不到路由时，重定向到首页
    path:'**',component:ErrpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

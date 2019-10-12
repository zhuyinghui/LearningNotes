//模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http'

//根组件
import { AppComponent } from './app.component';  
//局部组件
import { HeaderComComponent } from './components/header-com/header-com.component';
import { FooterComComponent } from './components/footer-com/footer-com.component';
import { FormComComponent } from './components/form-com/form-com.component';
import { DataComComponent } from './components/data-com/data-com.component'
//页面组件
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { ErrpageComponent } from './pages/errpage/errpage.component';
import { Page3Component } from './pages/page3/page3.component';

//服务
import { StorageService } from './services/storage.service';
import { AxiosService } from './services/axios.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComComponent,
    FooterComComponent,
    HomeComponent,
    FormComComponent,
    DataComComponent,
    Page1Component,
    Page2Component,
    ErrpageComponent,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    StorageService,
    AxiosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

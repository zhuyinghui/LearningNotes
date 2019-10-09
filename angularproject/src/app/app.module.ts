import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComComponent } from './components/header-com/header-com.component';
import { FooterComComponent } from './components/footer-com/footer-com.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComComponent } from './components/form-com/form-com.component';
import { StorageService } from './services/storage.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComComponent,
    FooterComComponent,
    HomeComponent,
    FormComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getGlobalMethod(){
    alert('这是全局方法')
  }
}

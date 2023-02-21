import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin : string | undefined;
  openSideNav= false;
  constructor(private router: Router,private storage: StorageService) { }
  
  login(username: string, password: string) {
    if (username === "Andrew@sbs.com" && password === "123456") {
      this.isLogin = username;
      console.log(this.isLogin)
      return 200;

    } else {
     
      return 403;
    }
  }

  logout() {
    console.log('logout')
    this.storage.clear();
    this.router.navigateByUrl('');
    console.log('logout done')
  }

}

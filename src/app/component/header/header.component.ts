import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';
import { User } from 'src/app/model/user/user';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/api/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayName: any;
  user!: User | null;
  currentLang = this.translate.currentLang;
  openSideNav = false
  constructor(private auth: AuthService, private router: Router, private storage: StorageService, private translate: TranslateService) { }
  
   ngOnInit() {
   this.checkLoginName();
  }
  checkLoginName() {
    setTimeout(() => {                           // <<<---using ()=> syntax
      console.log("this.user");
      this.displayName = localStorage.getItem("userProfile");
      console.log(this.displayName['name']);

      console.log(this.user?.name);
      // if (!this.displayName) {
      //   this.user = this.displayName;
      //   console.log(this.user);
      // //  this.router.navigateByUrl('landing')
      // }
      this.user = JSON.parse(this.displayName) as User;
    }, 1000);
 
  }

  logout() {
    this.auth.logout();
    this.storage.clear();
  }
  switchLang() {
   
    if (this.translate.currentLang === 'zh') {
      localStorage.setItem('lang','en')
    }
    else
    {
      localStorage.setItem('lang','zh')
    }
    this.currentLang = this.translate.currentLang;
    console.log(this.translate.currentLang);
    window.location.reload();
  }
}

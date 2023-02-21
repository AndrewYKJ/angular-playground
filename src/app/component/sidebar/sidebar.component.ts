import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  openSideNav = false

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  openSide() {
    if (this.openSideNav == false) {
      this.openSideNav = true
      this.auth.openSideNav = true
    }
    else {
      this.openSideNav = false
      this.auth.openSideNav = false
    }
  }
  // toHome() {
  //   this.router.navigate('dashboard/home')
  // }
  // toTask() {
  //   this.router.navigateByUrl('task')
  // }
  //openSideNav= this.header.openSideNav;
}

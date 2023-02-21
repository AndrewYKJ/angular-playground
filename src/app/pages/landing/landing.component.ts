import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private storage: StorageService, private router: Router, )
  {
    
  } 
 
  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth() {
    console.log('hihi');
    let user = localStorage.getItem("accessToken");
    console.log(user)
    if (user!=null && user.length > 0) {
    
      console.log('hihi');

      this.router.navigateByUrl('dashboard');
    } 
  };
}

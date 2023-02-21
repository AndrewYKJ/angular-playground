import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { SidebarComponent } from 'src/app/component/sidebar/sidebar.component';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  
  }
  openSideNav = this.auth.openSideNav;
}

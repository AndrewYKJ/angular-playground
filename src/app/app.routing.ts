import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/landing-layout/landing-layout.module').then(m => m.LandingLayoutModule),
      }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo : 'landing'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

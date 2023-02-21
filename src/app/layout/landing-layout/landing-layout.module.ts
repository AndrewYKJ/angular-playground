import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingLayoutRoutes } from './landing-layout.routing';
import { LandingComponent } from 'src/app/pages/landing/landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/pages/login/login.component';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(LandingLayoutRoutes),
    RouterModule,
    FormsModule,
    
  ]
})
export class LandingLayoutModule { }

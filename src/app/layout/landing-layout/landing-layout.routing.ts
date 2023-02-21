
import {  Routes } from '@angular/router';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { LoginComponent } from 'src/app/pages/login/login.component';


export const LandingLayoutRoutes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
        data: { title: 'Landing' }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'Landing' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
]
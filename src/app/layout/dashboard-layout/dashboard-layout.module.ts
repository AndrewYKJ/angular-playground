import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { TaskComponent } from 'src/app/pages/task/task.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { MaterialModule } from 'src/app/material.module';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { EditformComponent } from 'src/app/pages/editform/editform.component';
import { TabviewComponent } from 'src/app/pages/tabview/tabview.component';
import { Tabpage1Component } from 'src/app/pages/tabpage1/tabpage1.component';
import { Tabpage2Component } from 'src/app/pages/tabpage2/tabpage2.component';
import { Tabpage3Component } from 'src/app/pages/tabpage3/tabpage3.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { GridviewComponent } from 'src/app/pages/gridview/gridview.component';

@NgModule({
  declarations: [
    TaskComponent,
    DashboardComponent,
    DialogComponent,
    EditformComponent,
    TabviewComponent,
    Tabpage1Component,
    Tabpage2Component,
    Tabpage3Component,
    GridviewComponent,
  ],
  imports: [
   
    CommonModule,
    MaterialModule,
    FormsModule,

    TranslateModule,
    NgbAccordionModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    RouterModule,
  
  ]
  
})
export class DashboardLayoutModule { }
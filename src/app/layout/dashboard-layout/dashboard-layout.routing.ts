
import {  Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { EditformComponent } from 'src/app/pages/editform/editform.component';
import { GridviewComponent } from 'src/app/pages/gridview/gridview.component';
import { TabviewComponent } from 'src/app/pages/tabview/tabview.component';
import { TaskComponent } from 'src/app/pages/task/task.component';
import { DirectAccess } from 'src/app/services/directAccess.service';


export const DashboardLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'dashboard' }
    },
    {
        path: 'task',
        component: TaskComponent,
        data: { title: 'Task' }
    },
    {
        path: 'editform/:id',
        component: EditformComponent,
        data: { title: 'Edit Form'},
        canActivate: [DirectAccess]
    },
    {
        path: 'gridview',
        component: GridviewComponent,
        data: { title: 'GridView' }
    },
    {
        path: 'tabview',
        component: TabviewComponent,
        data: { title: 'TabView' }
    }
]
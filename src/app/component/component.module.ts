import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogComponent } from './dialog/dialog.component';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations:
    [NavbarComponent,HeaderComponent, DropdownComponent, SidebarComponent, AlertdialogComponent, SnackbarComponent],
 
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    DropdownComponent,
    SidebarComponent
  ]
})
export class ComponentModule { }

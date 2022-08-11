import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BradcrumbsComponent } from './bradcrumbs/bradcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [BradcrumbsComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [BradcrumbsComponent, HeaderComponent, SidebarComponent],
})
export class SharedModule { }

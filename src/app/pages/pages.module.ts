import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { MainPageComponent } from './main-page.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [DashboardComponent, ProgressComponent, Grafica1Component, MainPageComponent, AccountSettingComponent, RxjsComponent, ProfileComponent],
  imports: [
    CommonModule, SharedModule, RouterModule
    , FormsModule, ComponentsModule, ReactiveFormsModule
  ],
  exports: [DashboardComponent, ProgressComponent, Grafica1Component, MainPageComponent, AccountSettingComponent]
})
export class PagesModule { }

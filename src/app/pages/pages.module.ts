import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [DashboardComponent, ProgressComponent, Grafica1Component, MainPageComponent],
  imports: [
    CommonModule, SharedModule, RouterModule
    , FormsModule, ComponentsModule
  ],
  exports: [DashboardComponent, ProgressComponent, Grafica1Component, MainPageComponent]
})
export class PagesModule { }

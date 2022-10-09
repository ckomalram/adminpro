import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent , data: {titulo: 'dashboard'} },
      { path: 'grafica1', component: Grafica1Component , data: {titulo: 'grafica1'} },
      { path: 'progress', component: ProgressComponent , data: {titulo: 'progress'} },
      { path: 'account-settings', component: AccountSettingComponent , data: {titulo: 'account-settings'} },
      { path: 'rxjs', component: RxjsComponent , data: {titulo: 'rxjs'} },
      { path: 'profile', component: ProfileComponent , data: {titulo: 'Perfil de usuario'} },
    ]
  },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

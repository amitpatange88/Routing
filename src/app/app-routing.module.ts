import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BannerComponent} from './core/banner/banner.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';

const routes: Routes = [
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
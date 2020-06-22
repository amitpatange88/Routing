import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const coreRoutes: Routes = [
    {
        path: 'Core',
        children: [
            {
                path: 'Banner',
                component: BannerComponent
            },
            {
                path: 'Dashboard',
                component: DashboardComponent
            },
            {
                path: 'Sidebar',
                component: SidebarComponent,
                //outlet: 'coresidebar'
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
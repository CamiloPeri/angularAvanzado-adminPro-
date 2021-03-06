import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'account-settings', component: AccoutSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class PagesRoutingModule {}

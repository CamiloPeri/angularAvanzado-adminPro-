import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccoutSettingsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccoutSettingsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    ChartsModule

  ],
})
export class PagesModule {}

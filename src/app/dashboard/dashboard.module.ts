import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IPaaSCommonModule } from '../common/common.module';
import { DashboardComponent } from './dashboard.component';
import { EmptyStateComponent } from './emptystate.component';
import { PopularTemplatesComponent } from './populartemplates.component';
import { TemplatesModule } from '../templates/templates.module';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TemplatesModule,
    IPaaSCommonModule,
  ],
  declarations: [
    DashboardComponent,
    EmptyStateComponent,
    PopularTemplatesComponent,
  ],
})
export class DashboardModule {
}

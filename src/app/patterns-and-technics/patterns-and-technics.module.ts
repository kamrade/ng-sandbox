import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


import { PatternsAndTechnicsPageComponent } from './patterns-and-technics-page/patterns-and-technics-page.component';
import { ChangeDetectionStrategiesComponent } from './change-detection-strategies/change-detection-strategies.component';
import { StudentCardComponent } from './change-detection-strategies/student-card/student-card.component';
import { CourseCardComponent } from './change-detection-strategies/course-card/course-card.component';

const routes: Routes = [{
  path: '',
  component: PatternsAndTechnicsPageComponent,
  children: [{
    path: '',
    redirectTo: 'change-detection-strategies',
    pathMatch: 'full'
  }, {
    path: 'change-detection-strategies',
    component: ChangeDetectionStrategiesComponent
  }]
}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatternsAndTechnicsPageComponent, ChangeDetectionStrategiesComponent, StudentCardComponent, CourseCardComponent]
})
export class PatternsAndTechnicsModule { }

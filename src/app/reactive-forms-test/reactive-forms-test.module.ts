import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { ReactiveFormsPageComponent }
  from './reactive-forms-page/reactive-forms-page.component';
import { ReactiveFormsBasicWidgetComponent }
  from './reactive-forms-basic-widget/reactive-forms-basic-widget.component';

const routes: Routes = [{
  path: '',
  component: ReactiveFormsPageComponent,
  children: [{
    path: '',
    redirectTo: 'basic-forms',
    pathMatch: 'full'
  }, {
    path: 'basic-forms',
    component: ReactiveFormsBasicWidgetComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  declarations: [
    ReactiveFormsPageComponent,
    ReactiveFormsBasicWidgetComponent
  ]
})
export class ReactiveFormsTestModule { }

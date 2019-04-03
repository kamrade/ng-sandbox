import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { ManipulatingTheUiPageComponent } from './manipulating-the-ui-page/manipulating-the-ui-page.component';
import { ViewEncapsulationWidgetComponent } from './view-encapsulation-widget/view-encapsulation-widget.component';
import { PipeWidgetComponent } from './pipe-widget/pipe-widget.component';
import { DynamicCasePipe } from './pipe-widget/dynamic-case.pipe';

const routes: Routes = [{
  path: '',
  component: ManipulatingTheUiPageComponent,
  children: [{
    path: '',
    redirectTo: 'view-encapsulation',
    pathMatch: 'full'
  }, {
    path: 'view-encapsulation',
    component: ViewEncapsulationWidgetComponent
  }, {
    path: 'pipe-widget',
    component: PipeWidgetComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [
    ManipulatingTheUiPageComponent,
    ViewEncapsulationWidgetComponent,
    PipeWidgetComponent,
    DynamicCasePipe
  ]
})
export class ManipulatingTheUiModule { }

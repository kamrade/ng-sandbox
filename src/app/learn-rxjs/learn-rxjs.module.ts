import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { LearnRxjsPageComponent } from './learn-rxjs-page/learn-rxjs-page.component';
import { RxjsBasicsWidgetComponent } from './rxjs-basics-widget/rxjs-basics-widget.component';

const routes: Routes = [{
  path: '',
  component: LearnRxjsPageComponent,
  children: [{
    path: '',
    redirectTo: 'basics',
    pathMatch: 'full'
  }, {
    path: 'basics',
    component: RxjsBasicsWidgetComponent
  }]
}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [
    LearnRxjsPageComponent,
    RxjsBasicsWidgetComponent
  ]
})
export class LearnRxjsModule { }

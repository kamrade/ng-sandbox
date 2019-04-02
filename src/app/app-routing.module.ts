import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from 'src/app/shared-components/not-found-page/not-found-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/building-blocks',
  pathMatch: 'full'
}, {
  path: 'building-blocks',
  loadChildren: './building-blocks/building-blocks.module#BuildingBlocksModule'
}, {
  path: 'quering-the-ui',
  loadChildren: './quering-the-ui/quering-the-ui.module#QueringTheUiModule'
}, {
  path: 'manipulating-the-ui',
  loadChildren: './manipulating-the-ui/manipulating-the-ui.module#ManipulatingTheUiModule'
}, {
  path: 'learn-rxjs',
  loadChildren: './learn-rxjs/learn-rxjs.module#LearnRxjsModule'
}, {
  path: 'reactive-forms',
  loadChildren: './reactive-forms-test/reactive-forms-test.module#ReactiveFormsTestModule'
}, {
  path: 'patterns-and-technics',
  loadChildren: './patterns-and-technics/patterns-and-technics.module#PatternsAndTechnicsModule'
}, {
  path: '**',
  component: NotFoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

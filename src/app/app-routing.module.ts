import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { TemplaterefSelectorComponent } from './pages/templateref-selector/templateref-selector.component';
import { QueryDecoratorComponent } from './pages/query-decorator/query-decorator.component';
import { ViewContainerRefComponent } from './pages/view-container-ref/view-container-ref.component';
import { NotFoundPageComponent } from 'src/app/shared-components/not-found-page/not-found-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/building-blocks',
  pathMatch: 'full'
}, {
  path: 'contact',
  component: ContactFormComponent
}, {
  path: 'templates',
  component: TemplaterefSelectorComponent
}, {
  path: 'query-decorator',
  component: QueryDecoratorComponent
}, {
  path: 'view-container-ref',
  component: ViewContainerRefComponent
}, {
  path: 'building-blocks',
  loadChildren: './building-blocks/building-blocks.module#BuildingBlocksModule'
}, {
  path: 'sandbox',
  loadChildren: './sandbox/sandbox.module#SandboxModule'
}, {
  path: '**',
  component: NotFoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

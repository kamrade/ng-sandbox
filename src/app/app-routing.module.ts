import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { TemplaterefSelectorComponent } from './pages/templateref-selector/templateref-selector.component';
import { QueryDecoratorComponent } from './pages/query-decorator/query-decorator.component';
import { ViewContainerRefComponent } from './pages/view-container-ref/view-container-ref.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'setting',
  component: SettingComponent
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

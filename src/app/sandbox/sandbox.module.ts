import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { SandboxPageComponent } from './containers/sandbox-page/sandbox-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';

import { OpenCloseComponent } from './components/setting/open-close/open-close.component';
import { OutputDecoratorWidgetComponent } from './components/setting/output-decorator-widget/output-decorator-widget.component';
import { HelpBannerComponent } from './components/setting/help-banner/help-banner.component';
import { PaywallDirectiveWidgetComponent } from './components/setting/paywall-directive-widget/paywall-directive-widget.component';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TemplaterefSelectorComponent } from './components/templateref-selector/templateref-selector.component';
import { TemplaterefChildComponent } from './components/templateref-selector/templateref-child/templateref-child.component';
import { QueryDecoratorComponent } from './components/query-decorator/query-decorator.component';
import { ToggleViewContentComponent } from './components/query-decorator/toggle-view-content/toggle-view-content.component';
import { ViewContainerRefComponent } from './components/view-container-ref/view-container-ref.component';


import { PaywallDirective } from './paywall.directive';

const routes: Routes = [{
  path: '',
  component: SandboxPageComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'setting',
    component: SettingComponent
  }, {
    path: 'contact-form',
    component: ContactFormComponent
  }, {
    path: 'query-decorator',
    component: QueryDecoratorComponent
  }, {
    path: 'template-ref-selectors',
    component: TemplaterefSelectorComponent
  }, {
    path: 'view-container-ref',
    component: ViewContainerRefComponent
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
    SandboxPageComponent,
    DashboardComponent,

    ContactFormComponent,
    TemplaterefSelectorComponent,
    TemplaterefChildComponent,
    QueryDecoratorComponent,
    ToggleViewContentComponent,
    ViewContainerRefComponent,

    SettingComponent,
    OpenCloseComponent,
    OutputDecoratorWidgetComponent,
    HelpBannerComponent,
    PaywallDirectiveWidgetComponent,

    PaywallDirective,

  ]
})
export class SandboxModule { }

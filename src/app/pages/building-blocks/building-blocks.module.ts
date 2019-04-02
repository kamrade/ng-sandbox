import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LicenseConfigService } from './services/license-config.service';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { BuildingBlocksPageComponent } from './building-blocks-page/building-blocks-page.component';
import { InputSetterContainerComponent } from './input-setter-container/input-setter-container.component';
import { PersonComponent } from './input-setter-container/person/person.component';
import { OutputDecoratorWidgetComponent } from './output-decorator-widget/output-decorator-widget.component';
import { HelpBannerComponent } from './output-decorator-widget/help-banner/help-banner.component';
import { PaywallDirectiveWidgetComponent } from './paywall-directive-widget/paywall-directive-widget.component';
import { PaywallDirective } from './paywall-directive-widget/paywall.directive';

const routes: Routes = [{
  path: '',
  component: BuildingBlocksPageComponent,
  children: [{
    path: '',
    redirectTo: 'input-decorator',
    pathMatch: 'full'
  }, {
    path: 'input-decorator',
    component: InputSetterContainerComponent
  }, {
    path: 'output-decorator',
    component: OutputDecoratorWidgetComponent
  }, {
    path: 'paywall-directive-widget',
    component: PaywallDirectiveWidgetComponent
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
    BuildingBlocksPageComponent,
    InputSetterContainerComponent,
    PersonComponent,
    OutputDecoratorWidgetComponent,
    HelpBannerComponent,
    PaywallDirectiveWidgetComponent,
    PaywallDirective
  ],
  providers: [LicenseConfigService],
})
export class BuildingBlocksModule { }

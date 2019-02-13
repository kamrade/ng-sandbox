import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { QueringTheUiPageComponent } from 'src/app/quering-the-ui/quering-the-ui-page/quering-the-ui-page.component';
import { QueryDecoratorsComponent } from './query-decorators/query-decorators.component';
import { ToggleViewContentComponent } from './query-decorators/toggle-view-content/toggle-view-content.component';
import { TemplateRefSelectorComponent } from './template-ref-selector/template-ref-selector.component';
import { TemplateRefSelectorChildComponent } from './template-ref-selector/template-ref-selector-child/template-ref-selector-child.component';
import { ViewContainerRefWidgetComponent } from './view-container-ref-widget/view-container-ref-widget.component';
import { SelectorOptionsWidgetComponent } from './selector-options-widget/selector-options-widget.component';
import { SorChildComponent } from './selector-options-widget/sor-child/sor-child.component';

const routes: Routes = [{
  path: '',
  component: QueringTheUiPageComponent,
  children: [{
    path: '',
    redirectTo: 'query-decorator',
    pathMatch: 'full'
  }, {
    path: 'query-decorator',
    component: QueryDecoratorsComponent
  }, {
    path: 'template-ref-selector',
    component: TemplateRefSelectorComponent
  }, {
    path: 'view-container-ref',
    component: ViewContainerRefWidgetComponent
  }, {
    path: 'selector-options',
    component: SelectorOptionsWidgetComponent
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
    QueringTheUiPageComponent,
    QueryDecoratorsComponent,
    ToggleViewContentComponent,
    TemplateRefSelectorComponent,
    TemplateRefSelectorChildComponent,
    ViewContainerRefWidgetComponent,
    SelectorOptionsWidgetComponent,
    SorChildComponent,
  ]
})
export class QueringTheUiModule { }

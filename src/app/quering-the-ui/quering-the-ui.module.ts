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
import { SelectorOptionsDescendantsWidgetComponent } from './selector-options-descendants-widget/selector-options-descendants-widget.component';
import { SodChildComponent } from './selector-options-descendants-widget/sod-child/sod-child.component';
import { SodChild2Component } from './selector-options-descendants-widget/sod-child2/sod-child2.component';
import { SodChild3Component } from './selector-options-descendants-widget/sod-child3/sod-child3.component';
import { SodChild4Component } from './selector-options-descendants-widget/sod-child4/sod-child4.component';
import { DependencyInjectionWidgetComponent } from './dependency-injection-widget/dependency-injection-widget.component';
import { QueryListWidgetComponent } from './query-list-widget/query-list-widget.component';
import { QueryListChildComponent } from './query-list-widget/query-list-child/query-list-child.component';

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
  }, {
    path: 'selector-options-descendants',
    component: SelectorOptionsDescendantsWidgetComponent
  }, {
    path: 'dependency-injection',
    component: DependencyInjectionWidgetComponent
  }, {
    path: 'quering-list',
    component: QueryListWidgetComponent
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
    SelectorOptionsDescendantsWidgetComponent,
    SodChildComponent,
    SodChild2Component,
    SodChild3Component,
    SodChild4Component,
    DependencyInjectionWidgetComponent,
    QueryListWidgetComponent,
    QueryListChildComponent,
  ]
})
export class QueringTheUiModule { }

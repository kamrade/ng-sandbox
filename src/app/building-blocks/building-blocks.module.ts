import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { BuildingBlocksPageComponent } from './containers/building-blocks-page/building-blocks-page.component';
import { InputSetterContainerComponent } from './containers/input-setter-container/input-setter-container.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [{
  path: '',
  component: BuildingBlocksPageComponent,
  children: [{
    path: '',
    redirectTo: 'input',
    pathMatch: 'full'
  }, {
    path: 'input',
    component: InputSetterContainerComponent
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
    PersonComponent]
})
export class BuildingBlocksModule { }

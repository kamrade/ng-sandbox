import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { BuildingBlocksPageComponent } from './containers/building-blocks-page/building-blocks-page.component';

const routes: Routes = [{
  path: '',
  component: BuildingBlocksPageComponent,
  pathMatch: 'full'
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [BuildingBlocksPageComponent]
})
export class BuildingBlocksModule { }

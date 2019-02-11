import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IconsModule } from 'src/app/icons/icons.module';

import { FormFieldComponent } from './form-field/form-field.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormTitleComponent } from './form-title/form-title.component';
import { FormDividerComponent } from './form-divider/form-divider.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
    RouterModule
  ],
  declarations: [
    FormFieldComponent,
    NavigationComponent,
    FormTitleComponent,
    FormDividerComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  exports: [
    FormFieldComponent,
    NavigationComponent,
    FormTitleComponent,
    FormDividerComponent,
    HeaderComponent
  ]
})
export class SharedComponentsModule { }

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

import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.directive';

import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownDirective } from './dropdown/dropdown.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
    RouterModule
  ],
  providers: [ ModalService ],
  declarations: [
    FormFieldComponent,
    NavigationComponent,
    FormTitleComponent,
    FormDividerComponent,
    HeaderComponent,
    NotFoundPageComponent,
    TooltipDirective,
    TooltipComponent,
    ModalComponent,
    DropdownDirective,
    DropdownComponent
  ],
  entryComponents: [
    TooltipComponent,
    DropdownComponent
  ],
  exports: [
    FormFieldComponent,
    NavigationComponent,
    FormTitleComponent,
    FormDividerComponent,
    HeaderComponent,
    ModalComponent,
    TooltipComponent,
    DropdownDirective
  ]
})
export class SharedComponentsModule { }

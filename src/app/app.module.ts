import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from './icons/icons.module';

import { SharedComponentsModule } from './shared-components/shared-components.module';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';


import { TemplaterefSelectorComponent } from './pages/templateref-selector/templateref-selector.component';
import { TemplaterefChildComponent } from './pages/templateref-selector/templateref-child/templateref-child.component';
import { QueryDecoratorComponent } from './pages/query-decorator/query-decorator.component';
import { ToggleViewContentComponent } from './pages/query-decorator/toggle-view-content/toggle-view-content.component';
import { ViewContainerRefComponent } from './pages/view-container-ref/view-container-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    TemplaterefSelectorComponent,
    TemplaterefChildComponent,
    QueryDecoratorComponent,
    ToggleViewContentComponent,
    ViewContainerRefComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedComponentsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

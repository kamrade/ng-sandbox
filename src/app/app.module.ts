import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';

import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { FormTitleComponent } from './form-title/form-title.component';
import { FormDividerComponent } from './form-divider/form-divider.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    NavigationComponent,
    DashboardComponent,
    SettingComponent,
    FormTitleComponent,
    FormDividerComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

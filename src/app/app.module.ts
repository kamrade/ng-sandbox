import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingComponent } from './pages/setting/setting.component';
import { FormTitleComponent } from './shared/form-title/form-title.component';
import { FormDividerComponent } from './shared/form-divider/form-divider.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { OpenCloseComponent } from './pages/setting/open-close/open-close.component';
import { OutputDecoratorWidgetComponent } from './pages/setting/output-decorator-widget/output-decorator-widget.component';
import { HelpBannerComponent } from './pages/setting/help-banner/help-banner.component';
import { PaywallDirectiveWidgetComponent } from './pages/setting/paywall-directive-widget/paywall-directive-widget.component';
import { PaywallDirective } from './paywall.directive';
import { TemplaterefSelectorComponent } from './pages/templateref-selector/templateref-selector.component';
import { TemplaterefChildComponent } from './pages/templateref-selector/templateref-child/templateref-child.component';
import { QueryDecoratorComponent } from './pages/query-decorator/query-decorator.component';
import { ToggleViewContentComponent } from './pages/query-decorator/toggle-view-content/toggle-view-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    NavigationComponent,
    DashboardComponent,
    SettingComponent,
    FormTitleComponent,
    FormDividerComponent,
    ContactFormComponent,
    OpenCloseComponent,
    OutputDecoratorWidgetComponent,
    HelpBannerComponent,
    PaywallDirectiveWidgetComponent,
    PaywallDirective,
    TemplaterefSelectorComponent,
    TemplaterefChildComponent,
    QueryDecoratorComponent,
    ToggleViewContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

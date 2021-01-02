import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {registerLocaleData} from '@angular/common';

import {routes} from './app-routing';
import {AppComponent} from './app.component';
import {NavbarTopComponent} from './navbar-top/navbar-top.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SHARED_SERVICES} from "./shared/services";
import {environment} from "../environments/environment";
import {API_BASE_URL, WS_URL} from "./app.tokens";

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: "reload",
      relativeLinkResolution: 'legacy'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    ...SHARED_SERVICES,
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: API_BASE_URL, useValue: environment.apiBaseUrl},
    {provide: WS_URL, useValue: environment.wsUrl}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

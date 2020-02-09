import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  ...SHARED_SERVICES,
  { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
  { provide: WS_URL, useValue: environment.wsUrl }
],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

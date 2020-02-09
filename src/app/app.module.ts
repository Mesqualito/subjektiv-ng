import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {routes} from './app-routing';
import {AppComponent} from './app.component';
import {NavbarTopComponent} from './navbar-top/navbar-top.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {HttpClientModule} from "@angular/common/http";
import {AusgabeService} from "./shared/services/ausgabe.service";
import {RouterModule} from "@angular/router";
import {CategoryService} from "./shared/services/category.service";
import {BlogService} from "./shared/services/blog.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
  providers: [AusgabeService, CategoryService, BlogService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

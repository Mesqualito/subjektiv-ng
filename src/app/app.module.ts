import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import { DownloadComponent } from './download/download.component';
import {AusgabeService} from "./shared/services/ausgabe.service";
import {RouterModule} from "@angular/router";

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
        FormsModule,
        FlexLayoutModule,
        HttpClientModule
    ],
    providers: [AusgabeService],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

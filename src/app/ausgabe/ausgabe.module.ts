import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AusgabeComponent} from './ausgabe.component';
import {AusgabeDetailComponent} from './ausgabe-detail/ausgabe-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {ausgabeRoute} from "./ausgabe-detail/ausgabe.route";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AusgabeComponent, AusgabeDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ausgabeRoute),
    FlexLayoutModule,
    MatButtonModule,
    NgMaterialModule,
  ]
})
export class AusgabeModule { }

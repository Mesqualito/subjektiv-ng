import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AusgabeComponent } from './ausgabe.component';
import { AusgabeDetailComponent } from './ausgabe-detail/ausgabe-detail.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {NgMaterialModule} from "../ng-material/ng-material.module";



@NgModule({
  declarations: [AusgabeComponent, AusgabeDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AusgabeComponent}
    ]),
    FlexLayoutModule,
    MatButtonModule,
    NgMaterialModule
  ]
})
export class AusgabeModule { }

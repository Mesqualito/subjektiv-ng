import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AusgabeComponent} from './ausgabe.component';
import {AusgabeDetailComponent} from './ausgabe-detail/ausgabe-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {RouterModule} from "@angular/router";
import {SearchComponent} from "../search/search.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AusgabeComponent, AusgabeDetailComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AusgabeComponent},
      {path: ':ausgabeId/view', component: AusgabeDetailComponent}
    ]),
    FlexLayoutModule,
    MatButtonModule,
    NgMaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AusgabeModule {
}

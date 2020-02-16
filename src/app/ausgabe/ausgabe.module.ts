import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AusgabeComponent} from './ausgabe.component';
import {AusgabeDetailComponent} from './ausgabe-detail/ausgabe-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {RouterModule} from "@angular/router";
import {AusgabeGridComponent} from './ausgabe-grid/ausgabe-grid.component';
import {SearchAusgabeResultsComponent} from './search-ausgabe-results/search-ausgabe-results.component';


@NgModule({
  declarations: [AusgabeComponent, AusgabeDetailComponent, AusgabeGridComponent, SearchAusgabeResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AusgabeComponent},
      {path: ':ausgabeId/view', component: AusgabeDetailComponent}
    ]),
    FlexLayoutModule,
    MatButtonModule,
    NgMaterialModule
  ],
  providers: [ Location ]
})
export class AusgabeModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AusgabeDetailComponent} from './ausgabe-detail/ausgabe-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {Route, RouterModule} from "@angular/router";
import {AusgabeGridComponent} from './ausgabe-grid/ausgabe-grid.component';
import {SearchAusgabeResultsComponent} from './search-ausgabe-results/search-ausgabe-results.component';


const routes: Route[] = [
  {path: 'search-results', component: SearchAusgabeResultsComponent},
  {path: ':ausgabeId/:maxId/view', component: AusgabeDetailComponent},
  {path: '', component: AusgabeGridComponent}
  ];

@NgModule({
  declarations: [AusgabeDetailComponent, AusgabeGridComponent, SearchAusgabeResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    NgMaterialModule
  ],
  providers: [Location]
})
export class AusgabeModule {
}

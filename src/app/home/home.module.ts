import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {RouterModule} from "@angular/router";
import {DownloadComponent} from "../download/download.component";

@NgModule({
  declarations: [HomeComponent, DownloadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class HomeModule { }

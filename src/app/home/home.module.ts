import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BlogModule} from "../blog/blog.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    NgMaterialModule,
    FormsModule,
    FlexLayoutModule,
    BlogModule
  ]
})
export class HomeModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogSuggestionComponent} from './blog-suggestion/blog-suggestion.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [BlogComponent, BlogSuggestionComponent, BlogDetailComponent],
  exports: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BlogComponent}
    ]),
    NgMaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class BlogModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogSuggestionComponent} from './blog-suggestion/blog-suggestion.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BlogEntry} from "../shared/services/blog.service";
import {BlogComponent} from "./blog.component";


@NgModule({
  declarations: [BlogComponent, BlogSuggestionComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BlogComponent}
    ]),
    NgMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: []
})
export class BlogModule {
}

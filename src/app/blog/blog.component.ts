import {Component} from '@angular/core';
import {Observable, from} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BlogEntry, BlogService} from "../shared/services/blog.service";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {log} from "util";



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogEntry$: Observable<BlogEntry>;
  suggestedBlogEntries$: Observable<BlogEntry[]>;
  selectedId: number;

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService) {
    this.blogEntry$ = this._route.paramMap
      .pipe(
        switchMap(params => {
          this.selectedId = +params.get('blogEntryId');
          return this._blogService.getById(this.selectedId);
        }),
        tap(whatever => console.log('Whatever: ' + whatever)),
        filter(blogEntryId => Boolean(blogEntryId))
        )

    this.suggestedBlogEntries$ = this._blogService.getAll();
  }
}

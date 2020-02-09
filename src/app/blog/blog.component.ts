import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BlogEntry, BlogService} from "../shared/services/BlogService";
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

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService) {
    this.blogEntry$ = this._route.paramMap
      .pipe(
        map(params => parseInt(params.get('blockEntryId') || '', 10)),
        filter(blogEntryId => Boolean(blogEntryId)),
        switchMap(blogEntryId => this._blogService.getById(blogEntryId))
      );

    this.suggestedBlogEntries$ = this._blogService.getAll();
  }
}

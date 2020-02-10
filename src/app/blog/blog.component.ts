import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable, from, of} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BlogEntry, BlogService} from "../shared/services/blog.service";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {log} from "util";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogEntry$: Observable<BlogEntry>;
  suggestedBlogEntries$: Observable<BlogEntry[]>;

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService) {
    this.loadPageEntries();
  }

  ngOnInit(): void {

  }

  loadPageEntries(): void {

    this.blogEntry$ = this._route.paramMap
      .pipe(
        map(params => parseInt(params.get('blogEntryId') || '', 10)),
        filter(blogEntryId => Boolean(blogEntryId)),
        switchMap(blogEntryId => this._blogService.getById(blogEntryId))
      );

    this.suggestedBlogEntries$ = this._blogService.getAll();
  }
}

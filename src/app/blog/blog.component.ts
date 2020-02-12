import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../shared/services/blog.service";
import {filter, map, switchMap} from "rxjs/operators";
import {IBlogEntry} from '../shared/model/blog.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogEntry$: Observable<IBlogEntry>;
  suggestedBlogEntries$: Observable<IBlogEntry[]>;

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService) {
    this.loadPageEntries();
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

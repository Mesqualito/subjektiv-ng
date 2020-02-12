import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {distinctUntilChanged, map} from "rxjs/operators";
import {IBlogEntry} from "../model/blog.model";


export abstract class BlogService {
  abstract getAll(): Observable<IBlogEntry[]>;

  abstract getById(blogEntryId: number): Observable<IBlogEntry>;

  abstract getMaxId(): Observable<number>;
}

@Injectable()
export class _StaticBlogService implements BlogService {

  url = '/data/blogeintraege.json';

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<IBlogEntry[]> {
    return this._http.get<IBlogEntry[]>(this.url);
  }

  getById(blogEntryId: number): Observable<IBlogEntry> {
    return this._http.get<IBlogEntry[]>(this.url).pipe(
      map(blogEntries => <IBlogEntry>blogEntries.find(p => p.id === blogEntryId)));
  }

  getMaxId(): Observable<number> {
    return this._http.get<IBlogEntry[]>(this.url).pipe(
      map(blogEntry => blogEntry.length),
      distinctUntilChanged()
    );
  }
}

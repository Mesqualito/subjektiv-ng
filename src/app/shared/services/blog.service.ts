import {Inject, Injectable} from '@angular/core';
import {IBasics} from "../IBasics";
import {Category} from "./category.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {distinctUntilChanged, map} from "rxjs/operators";
import {API_BASE_URL} from "../../app.tokens";

export interface BlogEntry extends IBasics {
  title: string;
  text: string;
  category: Category;
}

export abstract class BlogService {
  abstract getAll(): Observable<BlogEntry[]>;
  abstract getById(blogEntryId: number): Observable<BlogEntry>;
  abstract getMaxId(): Observable<number>;
}

@Injectable()
export class _StaticBlogService implements BlogService {

  url = '/data/blogeintraege.json';

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<BlogEntry[]> {
    return this._http.get<BlogEntry[]>(this.url);
  }

  getById(blogEntryId: number): Observable<BlogEntry> {
    return this._http.get<BlogEntry[]>(this.url).pipe(
      map(blogEntries => <BlogEntry>blogEntries.find(p => p.id === blogEntryId)));
  }

  getMaxId(): Observable<number> {
    return this._http.get<BlogEntry[]>(this.url).pipe(
      map( blogEntry => blogEntry.length),
      distinctUntilChanged()
    );
  }
}

@Injectable()
export class HttpBlogService implements BlogService {
  constructor(
    @Inject(API_BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {}

  getAll(): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>(`${this.baseUrl}/api/blogeintraege`);
  }

  getById(blogEntryId: number): Observable<BlogEntry> {
    return this.http.get<BlogEntry>(`${this.baseUrl}/api/products/${blogEntryId}`);
  }

  getMaxId(): Observable<number> {
    return undefined;
  }
}

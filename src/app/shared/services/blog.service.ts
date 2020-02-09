import {Injectable} from '@angular/core';
import {IBasics} from "../IBasics";
import {Category} from "./category.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface BlogEntry extends IBasics {

  title: string;
  text: string;
  category: Category;

}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  jsons: any;
  url = '/data/blogeintraege.json';

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<BlogEntry[]> {
    return this.jsons = this._http.get<BlogEntry[]>(this.url);
  }

  getById(blogEntryId: number) {
    return this._http.get<Array<BlogEntry>>(this.url).pipe(
      map((elements: Array<BlogEntry>) => {
        return elements.find((element: BlogEntry) => {
          return element.id === blogEntryId;
        });
      })
    );
  }
}

import {Injectable} from '@angular/core';
import {IBasics} from "../IBasics";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Category extends IBasics {

  title: string;
  description: string;

}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  jsons: any;
  url = '/data/kategorien.json';

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.jsons = this._http.get<Category[]>(this.url);
  }

  getById(categoryId: number) {
    return this._http.get<Array<Category>>(this.url).pipe(
      map((elements: Array<Category>) => {
        return elements.find((element: Category) => {
          return element.id === categoryId;
        });
      })
    );
  }
}


import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ICategory} from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  jsons: any;
  url = '/data/kategorien.json';

  // HttpClient needs to be injected => add @Injectable to class...
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<ICategory[]> {
    return this.jsons = this._http.get<ICategory[]>(this.url);
  }

  getById(categoryId: number) {
    return this._http.get<Array<ICategory>>(this.url).pipe(
      map((elements: Array<ICategory>) => {
        return elements.find((element: ICategory) => {
          return element.id === categoryId;
        });
      })
    );
  }
}

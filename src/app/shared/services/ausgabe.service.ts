import {Injectable} from '@angular/core';
import {NgBasics} from "../ng-basics";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Ausgabe extends NgBasics {

  title: string;
  description: string;
  chronoOrderNo: number;
  releaseDate: Date;
  searchStrings: string[];
  pageCount: number;
  // Angabe in kB
  fileSize: number;
  imageUrl: string;
  filePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class AusgabeService {

  jsons: any;
  url = '/data/ausgaben.json';

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<Ausgabe[]> {
    return this.jsons = this._http.get<Ausgabe[]>(this.url);
  }

  getById(ausgabeId: number) {
    return this._http.get<Array<Ausgabe>>(this.url)
      .pipe(
        map((elements: Array<Ausgabe>) => {
          return elements.find((element: Ausgabe) => {
            return element.id === ausgabeId;
          });
        })
      );
  }
}

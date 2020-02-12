import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Ausgabe, IAusgabe} from "../model/ausgabe.model";

type EntityResponseType = HttpResponse<IAusgabe>;

@Injectable({
  providedIn: 'root'
})
export class AusgabeService {

  jsons: any;
  url = '/data/ausgaben.json';

  // HttpClient needs to be injected => add @Injectable to class...
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<IAusgabe[]> {
    return this.jsons = this._http.get<IAusgabe[]>(this.url);
  }

  getById(ausgabeId: number): Observable<EntityResponseType> {
    return this._http
      .get<Ausgabe>(`ausgabe/${ausgabeId}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => res));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IAusgabe} from "../model/ausgabe.model";

export abstract class AusgabeService {
  abstract getAll(): Observable<IAusgabe[]>;
  abstract getById(ausgabeId: number): Observable<IAusgabe>;
}

@Injectable()
export class _StaticAusgabeService implements AusgabeService {

  url = '/data/ausgaben.json';

  // HttpClient needs to be injected => add @Injectable to class...
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<IAusgabe[]> {
    return this._http.get<IAusgabe[]>(this.url);
  }

  getById(ausgabeId: number): Observable<IAusgabe> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
        map(ausgaben => <IAusgabe>ausgaben.find(p => p.id === ausgabeId)));
  }
}

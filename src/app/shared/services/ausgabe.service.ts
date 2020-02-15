import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, distinctUntilChanged, map} from "rxjs/operators";
import {IAusgabe} from "../model/ausgabe.model";

export abstract class AusgabeService {
  abstract getAll(): Observable<IAusgabe[]>;
  abstract getById(ausgabeId: number): Observable<IAusgabe>;
  abstract getMaxId(): Observable<number>;
  abstract getAllSub(): Observable<IAusgabe[]>;
  abstract getByIdSub(ausgabeId: number): void;
  abstract searchByKeyword(searchTerm: string): Observable<IAusgabe[]>;
}

@Injectable()
export class _StaticAusgabeService implements AusgabeService {

  url = '/data/ausgaben.json';
  errorMsg = '';

  // HttpClient needs to be injected => add @Injectable to class...
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<IAusgabe[]> {
    return this._http.get<IAusgabe[]>(this.url);
  }

  // easy subscribe still working, no need for async-pipe
  getAllSub(): Observable<IAusgabe[]> {
    this.errorMsg = '';
    return this._http.get<IAusgabe[]>(this.url)
      .pipe(
        // RxJS-Operators
        catchError(err => {
          // log HTTP-error and...
          console.error('GET failed: ', err);
          // rethrow a user-friendly message
          const message = 'Entschuldigung, die  »subjektiv!«-Ausgaben können nicht geladen werden. Bitte versuchen ' +
            'Sie es in einigen Minuten noch einmal!';
          return throwError(message);
        }),

        // return better results
        map((data: IAusgabe[]) => data),
      );
  }

  getById(ausgabeId: number): Observable<IAusgabe> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
      map(ausgaben => <IAusgabe>ausgaben.find(p => p.id === ausgabeId)));
  }

  getByIdSub(ausgabeId: number): void {
    return null;
  }

  getMaxId(): Observable<number> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
      map(ausgabe => ausgabe.length),
      distinctUntilChanged()
    );
  }

  searchByKeyword(searchTerm: string): Observable<IAusgabe[]> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
      map( searchTerms => <IAusgabe[]>searchTerms.find(p => (p.searchStrings.join(' ').search(searchTerm))))
    );
  }
}

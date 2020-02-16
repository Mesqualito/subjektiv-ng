import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, distinctUntilChanged, map} from "rxjs/operators";
import {AusgabeSearchParams, IAusgabe} from "../model/ausgabe.model";

export abstract class AusgabeService {
  abstract getAll(): Observable<IAusgabe[]>;

  abstract getById(ausgabeId: number): Observable<IAusgabe>;

  abstract getMaxId(): Observable<number>;
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
      map(ausgaben => <IAusgabe>ausgaben.find(ausgabe => ausgabe.id === ausgabeId)));
  }

  getMaxId(): Observable<number> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
      map(ausgabe => ausgabe.length),
      distinctUntilChanged()
    );
  }

  pdfFullText(ausgabeId: number): Observable<string> {
    // ToDo: index the pdf
    return this.getById(ausgabeId).pipe(
      map(ausgabe => ausgabe.description.toLowerCase()),
      catchError(e => of('Keine Ausgabe gefunden!'))
    );
  }

  search(params: AusgabeSearchParams): Observable<IAusgabe[]> {
    return this._http.get<IAusgabe[]>(this.url).pipe(
      map(ausgaben => this.filterAusgaben(ausgaben, params))
    );
  }

  // Nur die Ausgaben behalten, die den SearchParams entsprechen
  private filterAusgaben(ausgaben: IAusgabe[], params: AusgabeSearchParams): IAusgabe[] {
    return ausgaben
      .filter(ausgabe => params.searchString ? ausgabe.searchStrings.join(' ').toLowerCase().includes((<string>params.searchString).toLowerCase()) : ausgaben)
      .filter(ausgabe => params.minReleaseDate ? ausgabe.releaseDate >= params.minReleaseDate : ausgaben)
      .filter(ausgabe => params.maxReleaseDate ? ausgabe.releaseDate <= params.maxReleaseDate : ausgaben)
      .filter(ausgabe => params.fullText ? this.pdfFullText(ausgabe.id).includes((<string>params.fullText).toLowerCase()): ausgaben);
  }

}

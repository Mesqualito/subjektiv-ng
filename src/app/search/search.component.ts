import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EMPTY, Observable} from "rxjs";
import {IAusgabe} from "../shared/model/ausgabe.model";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {AusgabeService} from "../shared/services/ausgabe.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchArtikel = new FormControl();

  errorMsg: string;
  searchAusgabe = new FormControl();
  searchAusgabe$: Observable<string> = this.searchAusgabe.valueChanges;

  ausgaben$: Observable<IAusgabe[]> = this.searchAusgabe$.pipe(
    tap(() => this.errorMsg = ''), // clear previous error (if any)
    debounceTime(500), // wait for typing to stop
    distinctUntilChanged(), // only emit if different than last time

    // try search, discard an in-flight search (if any)
    switchMap(searchTerm => this._ausgabeService.searchByKeyword(searchTerm).pipe(
      catchError(err => {
        this.errorMsg = err.message;
        return EMPTY; // return to happy path with empty list
      })
      )
    ),

    map(this.makeResultsPretty)
  );


  makeResultsPretty(list: IAusgabe[]): IAusgabe[] {
    return list.length === 0 ? [{title: 'Keine Ergebnisse!'}] : list;
  }

  constructor(private _ausgabeService: AusgabeService) { }

  ngOnInit() {
  }

}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {IAusgabe} from "../../shared/model/ausgabe.model";
import {ActivatedRoute} from "@angular/router";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-search-ausgabe-results',
  templateUrl: './search-ausgabe-results.component.html',
  styleUrls: ['./search-ausgabe-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchAusgabeResultsComponent {
  readonly ausgaben$: Observable<IAusgabe[]>;

  constructor(
    private _ausgabeService: AusgabeService,
    private _route: ActivatedRoute
  ) {
    this.ausgaben$ = this._route.queryParams.pipe(
      switchMap(queryParams => this._ausgabeService.search(queryParams))
    );
  }
}


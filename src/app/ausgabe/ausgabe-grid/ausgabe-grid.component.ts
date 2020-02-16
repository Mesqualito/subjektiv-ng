import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AusgabeService} from "../shared/services/ausgabe.service";
import {map} from "rxjs/operators";
import {MediaObserver} from "@angular/flex-layout";
import {IAusgabe} from "../shared/model/ausgabe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ausgabe',
  templateUrl: './ausgabe.component.html',
  styleUrls: ['./ausgabe.component.scss']
})
export class AusgabeComponent {

  column$: Observable<number>;
  ausgaben$: Observable<IAusgabe[]>;


  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 4 ],
    [ 'lg', 6 ],
    [ 'xl', 10 ]
  ]);

  constructor(
    private _route: ActivatedRoute,
    private _ausgabeService: AusgabeService,
    private _media: MediaObserver) {
    this.loadPageEntries();
  }

  loadPageEntries(): void {
    this.ausgaben$ = this._ausgabeService.getAll();
    this.column$ = this._media.asObservable().pipe(
      map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias))
    );
  }
}

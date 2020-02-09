import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";
import {map} from "rxjs/operators";
import {Ausgabe, AusgabeService} from "../shared/services/ausgabe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly column$: Observable<number>;
  readonly ausgaben$: Observable<Ausgabe[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 1 ],
    [ 'md', 2 ],
    [ 'lg', 2 ],
    [ 'xl', 3 ]
  ]);

  constructor(private media: MediaObserver, private ausgabeService: AusgabeService) {
    this.ausgaben$ = this.ausgabeService.getAll();
    this.column$ = this.media.asObservable().pipe(
      map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias))
    );
  }
}

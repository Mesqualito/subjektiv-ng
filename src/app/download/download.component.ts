import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Ausgabe, AusgabeService} from "../shared/services/ausgabe.service";
import {MediaObserver} from "@angular/flex-layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {


  readonly column$: Observable<number>;
  readonly ausgaben$: Observable<Ausgabe[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 4 ],
    [ 'lg', 6 ],
    [ 'xl', 10 ]
  ]);

  constructor(private media: MediaObserver, private ausgabeService: AusgabeService) {
    this.ausgaben$ = this.ausgabeService.getAll();
    this.column$ = this.media.asObservable().pipe(
      map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias))
    );
  }
}

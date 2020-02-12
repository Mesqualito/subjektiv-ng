import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AusgabeService} from "../shared/services/ausgabe.service";
import {map} from "rxjs/operators";
import {MediaObserver} from "@angular/flex-layout";
import {IAusgabe} from "../shared/model/ausgabe.model";

@Component({
  selector: 'app-ausgabe',
  templateUrl: './ausgabe.component.html',
  styleUrls: ['./ausgabe.component.scss']
})
export class AusgabeComponent {

  readonly column$: Observable<number>;
  readonly ausgaben$: Observable<IAusgabe[]>;

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

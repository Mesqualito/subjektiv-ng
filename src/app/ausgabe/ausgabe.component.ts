import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Ausgabe, AusgabeService} from "../shared/services/ausgabe.service";
import {ActivatedRoute} from "@angular/router";
import {filter, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ausgabe',
  templateUrl: './ausgabe.component.html',
  styleUrls: ['./ausgabe.component.scss']
})
export class AusgabeComponent {
  ausgabe$: Observable<Ausgabe>;

  constructor(private _route: ActivatedRoute, private _ausgabeService: AusgabeService) {
    this.ausgabe$ = this._route.paramMap.pipe(
      map(params => parseInt(params.get('ausgabeId') || '', 10)),
      filter(ausgabeId => !!ausgabeId),
      switchMap(ausgabeId => this._ausgabeService.getById(ausgabeId))
    );
  }
}

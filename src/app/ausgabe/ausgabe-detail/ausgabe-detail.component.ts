import {Component, OnInit} from '@angular/core';
import {IAusgabe} from "../../shared/model/ausgabe.model";
import {ActivatedRoute} from "@angular/router";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent implements OnInit {

  ausgabe$: Observable<IAusgabe>;
  private _ausgabeId: number;

  constructor(private _route: ActivatedRoute, private _ausgabeService: AusgabeService) {

    /*
    this._ausgabeId = parseInt(this._route.paramMap.subscribe(params =>
      this._ausgabeId = params.get('ausgabeId'));
     */
    this._ausgabeId = parseInt(this._route.snapshot.paramMap.get('ausgabeId'));
    this.ausgabe$ = this._ausgabeService.getById(this._ausgabeId);
  }

  ngOnInit() {
  }
}


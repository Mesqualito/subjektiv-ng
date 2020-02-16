import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {IAusgabe} from "../../shared/model/ausgabe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent {

  ausgabe$: Observable<IAusgabe>;
  ausgabe: IAusgabe;
  private _ausgabeId: number;
  maxAusgaben$: Observable<number>;
  private _maxNum: number;
  isPrev: boolean;
  isNext: boolean;
  errorMsg = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ausgabeService: AusgabeService,
    private _location: Location) {
    this._route.paramMap.subscribe(
      params => this._ausgabeId = parseInt(params.get('ausgabeId')));
    this.ausgabe$ = this.getAusgabe(this._ausgabeId);
    this.getMaxAusgaben();
    this.checkNavigation();
  }

  getAusgabe(ausgabeId: number): Observable<IAusgabe> {
    return this._ausgabeService.getById(ausgabeId);
  }

  // subscribe to Observable
  getMaxAusgaben(): void {
    this.maxAusgaben$ = this._ausgabeService.getMaxId();
    this.maxAusgaben$.subscribe(maxNum => this._maxNum = maxNum);
  }

  checkNavigation(): void {
    this.ausgabe$ = this.getAusgabe(this._ausgabeId);
    this._location.replaceState('ausgabe/' + this._ausgabeId + '/view');
    if (this._ausgabeId < this._maxNum) {
      this.isNext = true;
    }
    if (this._ausgabeId > 1) {
      this.isPrev = true;
    } else {
      this.isPrev = false;
    }

    if (this._ausgabeId >= this._maxNum) {
      this.isNext = false;
    }
  }

  previous(): void {
    if (this._ausgabeId > 1) {
      this._ausgabeId = this._ausgabeId - 1;
      this.checkNavigation();
    } else {
      this.isPrev = false;
    }
  }

  next(): void {
    this.getMaxAusgaben();
    if (this._ausgabeId < this._maxNum) {
      this._ausgabeId = this._ausgabeId + 1;
      this.checkNavigation();
    } else {
      this.isNext = false;
    }
  }
}


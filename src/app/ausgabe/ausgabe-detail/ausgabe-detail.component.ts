import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {IAusgabe} from "../../shared/model/ausgabe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {combineLatest, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent implements OnInit {

  ausgabe$: Observable<IAusgabe>;
  ausgabe: IAusgabe;
  private _ausgabeId: number;
  maxAusgaben$: Observable<number>;
  private _maxNum: number;
  isPrev$: Observable<boolean>;
  isNext$: Observable<boolean>;
  errorMsg = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ausgabeService: AusgabeService,
    private _location: Location) {
    this._route.paramMap.subscribe(
      params => this._ausgabeId = parseInt(params.get('ausgabeId')));
    this.getMaxAusgaben();
  }

  ngOnInit(): void {
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
    if (this._ausgabeId > 1) {
      this.isPrev$ = of(true);
    } else {
      this.isPrev$ = of(false);
    }
    if (this._ausgabeId < this._maxNum) {
      this.isNext$ = of(true);
    } else {
      this.isNext$ = of(false);
    }
  }

  previous(): void {
    if (this._ausgabeId > 1) {
      this._ausgabeId = this._ausgabeId - 1;
      this.checkNavigation();
    } else {
      this.isPrev$ = of(false);
    }
  }

  next(): void {
    this.getMaxAusgaben();
    if (this._ausgabeId < this._maxNum) {
      this._ausgabeId = this._ausgabeId + 1;
      this.checkNavigation();
    } else {
      this.isNext$ = of(false);
    }
  }

  get isAny$(): Observable<boolean> {
    return combineLatest(this.isPrev$, this.isNext$).pipe(
        map(([isPrev, isNext] ) => (isPrev || isNext))
    );
  }
}


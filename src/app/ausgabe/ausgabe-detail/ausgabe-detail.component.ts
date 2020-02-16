import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {IAusgabe} from "../../shared/model/ausgabe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {Observable, of} from "rxjs";


@Component({
  selector: 'app-ausgabe-detail',
  templateUrl: './ausgabe-detail.component.html',
  styleUrls: ['./ausgabe-detail.component.scss']
})
export class AusgabeDetailComponent {

  private _ausgabeId: number;
  private _maxId: number;

  ausgabe$: Observable<IAusgabe>;
  isPrev$: Observable<boolean>;
  isNext$: Observable<boolean>;
  maxNum$: Observable<number>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ausgabeService: AusgabeService,
    private _location: Location) {
    this._route.paramMap.subscribe(
      params => {
        this._ausgabeId = parseInt(params.get('ausgabeId'));
        this._maxId = parseInt(params.get('maxId'))
      });
    this.maxNum$ = this._ausgabeService.getMaxId();
    this.navigate();
  }

  previous(maxId: number): void {
    if (this._ausgabeId > 1) {
      this._ausgabeId = this._ausgabeId - 1;
      this.navigate(maxId);
    }
  }

  next(maxId: number): void {
    if (this._ausgabeId < maxId) {
      this._ausgabeId = this._ausgabeId + 1;
      this.navigate(maxId);
    }
  }

  navigate(maxId: number = this._maxId): void {
    this.ausgabe$ = this.getAusgabe(this._ausgabeId);
    this._location.replaceState('ausgabe/' + this._ausgabeId + '/' + maxId + '/view');
    this.setNavArrows(maxId);
  }

  setNavArrows(maxId: number) {
    this._ausgabeId > 1 ? this.isPrev$ = of(true) : this.isPrev$ = of(false);
    this._ausgabeId < maxId ? this.isNext$ = of(true) : this.isNext$ = of(false);
  }

  getAusgabe(ausgabeId: number): Observable<IAusgabe> {
    return this._ausgabeService.getById(ausgabeId);
  }
}


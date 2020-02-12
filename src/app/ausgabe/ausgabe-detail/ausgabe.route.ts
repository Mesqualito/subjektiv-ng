import {ActivatedRouteSnapshot, Resolve, Router, Routes} from "@angular/router";
import {AusgabeComponent} from "../ausgabe.component";
import {AusgabeDetailComponent} from "./ausgabe-detail.component";
import {AusgabeService} from "../../shared/services/ausgabe.service";
import {Injectable} from "@angular/core";
import {EMPTY, Observable, of} from "rxjs";
import {flatMap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {Ausgabe, IAusgabe} from "../../shared/model/ausgabe.model";

@Injectable({providedIn: 'root'})
export class AusgabeResolve implements Resolve<IAusgabe> {
  constructor(private _ausgabeService: AusgabeService, private _router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IAusgabe> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this._ausgabeService.getById(id).pipe(
        flatMap((ausgabe: HttpResponse<Ausgabe>) => {
          if (ausgabe.body) {
            return of(ausgabe.body);
          } else {
            this._router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Ausgabe());
  }
}

export const ausgabeRoute: Routes = [
  {path: '', component: AusgabeComponent},
  {path: ':id/view', component: AusgabeDetailComponent}
];

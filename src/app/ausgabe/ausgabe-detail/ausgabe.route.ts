import {ActivatedRouteSnapshot, Resolve, Router, Routes} from "@angular/router";
import {AusgabeComponent} from "../ausgabe.component";
import {AusgabeDetailComponent} from "./ausgabe-detail.component";
import {Ausgabe, AusgabeService} from "../../shared/services/ausgabe.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AusgabeResolve implements Resolve<Ausgabe> {
  constructor(private _ausgabeService: AusgabeService, private _router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Ausgabe> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this._ausgabeService.getById(id);
      /*
      .pipe(
      flatMap((release: HttpResponse<Ausgabe>) => {
        if (release.body) {
          return of(release.body);
        } else {
          this._router.navigate(['404']);
          return EMPTY;
        }
      })
    );
  }
  return of(new Ausgabe());

       */
    }
  }
}

export const ausgabeRoute: Routes = [
  {path: '', component: AusgabeComponent},
  {path: ':id/view', component: AusgabeDetailComponent}
];

import {Route} from "@angular/router";


export const routes: Route[] = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  // { path: 'ausgaben/:ausgabeId', loadChildren: './ausgabe/ausgabe.module#AusgabeModule' }
];

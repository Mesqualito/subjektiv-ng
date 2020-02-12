import {Route} from "@angular/router";

export const routes: Route[] = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blogeintrag/:blogEntryId', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'ausgabe', loadChildren: () => import('./ausgabe/ausgabe.module').then(m => m.AusgabeModule) }
];

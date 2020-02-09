import {Component, Input} from '@angular/core';
import {BlogEntry} from "../../shared/services/blog.service";
import {Observable} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-blog-suggestion',
  templateUrl: './blog-suggestion.component.html',
  styleUrls: ['./blog-suggestion.component.scss']
})
export class BlogSuggestionComponent {

  @Input() blogEntries: BlogEntry[];

  readonly columns$: Observable<number>;
  readonly breakPointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 1],
    ['md', 1],
    ['lg', 1],
    ['xl', 2]
  ]);

  constructor( private _media: MediaObserver) {
    this.columns$ = this._media.asObservable().pipe(
      map(mc => <number>this.breakPointsToColumnsNumber.get(mc[0].mqAlias)),
      startWith(3) // gets number of grid columns bassed on media query alias
    );
  }
}

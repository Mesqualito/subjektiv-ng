import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BlogService} from "../shared/services/blog.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogEntryMaxId$: Observable<number>;

  constructor(private _router: Router, private _blogService: BlogService) {
    this.goToLatestBlogEntry();
  }

  ngOnInit(): void {
  }

  goToLatestBlogEntry(): void {
    this.blogEntryMaxId$ = this._blogService.getMaxId();
    this.blogEntryMaxId$.subscribe(blogEntryId => this._router.navigate(["/blogeintrag/" + blogEntryId]));
  }
}

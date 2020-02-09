import {Component, Input} from '@angular/core';
import {BlogEntry} from "../../shared/services/blogservice";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  @Input() blogEntry: BlogEntry;
}

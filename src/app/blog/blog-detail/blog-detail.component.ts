import {Component, Input} from '@angular/core';
import {IBlogEntry} from "../../shared/model/blog.model";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  @Input() blogEntry: IBlogEntry;
}

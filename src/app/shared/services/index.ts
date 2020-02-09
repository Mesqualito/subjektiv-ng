import {Provider} from "@angular/core";
import {_StaticBlogService, BlogService} from "./blog.service";

export const SHARED_SERVICES: Provider[] = [
  { provide: BlogService, useClass: _StaticBlogService }
];

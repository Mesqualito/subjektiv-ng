import {Provider} from "@angular/core";
import {_StaticBlogService, BlogService} from "./BlogService";

export const SHARED_SERVICES: Provider[] = [
  { provide: BlogService, useClass: _StaticBlogService }
];

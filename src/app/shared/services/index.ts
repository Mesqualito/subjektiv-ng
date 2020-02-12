import {Provider} from "@angular/core";
import {_StaticBlogService, BlogService} from "./blog.service";
import {_StaticAusgabeService, AusgabeService} from "./ausgabe.service";

export const SHARED_SERVICES: Provider[] = [
  { provide: BlogService, useClass: _StaticBlogService },
  { provide: AusgabeService, useClass: _StaticAusgabeService },

];

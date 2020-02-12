import {IBasics} from "./basics.model";
import {ICategory} from "./category.model";

export interface IBlogEntry extends IBasics {
  title?: string;
  text?: string;
  category?: ICategory;
}

export class BlogEntry implements IBlogEntry {

  constructor(
    public id?: number,
    public dateCreated?: Date,
    public dateModified?: Date,
    public title?: string,
    public text?: string,
    public category?: ICategory
  ) {}
}

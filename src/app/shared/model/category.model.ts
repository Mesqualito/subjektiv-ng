import {IBasics} from "./basics.model";


export interface ICategory extends IBasics {

  title?: string;
  description?: string;

}

export class Category implements ICategory {

  constructor(
    public id?: number,
    public dateCreated?: Date,
    public dateModified?: Date,
    public title?: string,
    public description?: string
  ) {
  }
}

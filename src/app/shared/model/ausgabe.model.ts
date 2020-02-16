import {IBasics} from "./basics.model";

export interface AusgabeSearchParams {
  searchString?: string;
  fullText?: string;
  minReleaseDate?: Date;
  maxReleaseDate?: Date;
}

export interface IAusgabe extends IBasics {

  title?: string;
  description?: string;
  chronoOrderNo?: number;
  releaseDate?: Date;
  searchStrings?: string[];
  pageCount?: number;
  // Angabe in kB
  fileSize?: number;
  imageUrl?: string;
  filePath?: string;
}

export class Ausgabe implements IAusgabe {
  constructor(
    public id?: number,
    public dateCreated?: Date,
    public dateModified?: Date,
    public title?: string,
    public description?: string,
    public chronoOrderNo?: number,
    public releaseDate?: Date,
    public searchStrings?: string[],
    public pageCount?: number,
    public fileSize?: number,
    public imageUrl?: string,
    public filePath?: string
  ) {}
}

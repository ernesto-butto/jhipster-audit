export interface IBook {
  id?: number;
  name?: string;
  author?: string;
  count?: number;
}

export class Book implements IBook {
  constructor(public id?: number, public name?: string, public author?: string, public count?: number) {}
}

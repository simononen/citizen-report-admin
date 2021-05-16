export interface IFavourite {
  [x: string]: any;
  data: IFavouritedata,
  links?: Object,
  meta?: Object
}

interface IFavouritedata {
[x: string]: any;
id?: string | number,
type?: string,
attributes: IFavouriteAttributes

}

interface IFavouriteAttributes {
  id?: number | string,
  name?: string,
  description: string,
  district_id?: number
}

export interface IParish {
  [x: string]: any;
  data: IParishdata,
  links?: Object,
  meta?: Object
}

interface IParishdata {
[x: string]: any;
id?: string | number,
type?: string,
attributes: IParishAttributes

}

interface IParishAttributes {
  id?: number | string,
  parish_code?: string,
  parish_name: string,
  parish_ward?: string,
  district_id?: number
}

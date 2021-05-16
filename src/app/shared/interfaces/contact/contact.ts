export interface IContact {
  [x: string]: any;
  data: IContactdata,
  links?: Object,
  meta?: Object
}

interface IContactdata {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: IContactAttributes
}

interface IContactAttributes {
  id?: number | string,
  office?: string,
  contact_details: string,
  district_id?: number
}

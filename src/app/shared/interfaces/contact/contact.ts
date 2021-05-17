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
  head_quarters?: string,
  address?: string,
  phone_number?: string,
  website?: string,
  district_id?: number
}

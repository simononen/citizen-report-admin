export interface ILeader {
  [x: string]: any;
  data: ILeaderdata,
  links?: Object,
  meta?: Object
}

interface ILeaderdata {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: ILeaderAttributes
}

interface ILeaderAttributes {
  id?: number | string,
  position?: string,
  description: string,
  contact_details?: string,
  district_id?: number
}

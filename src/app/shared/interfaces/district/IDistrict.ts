export interface IDistrict {
  id?: string | number,
  type?: string,
  attributes: IDistrictAttributes
}

export interface IDistricts  {
  data?: IDistrict[],
  meta: IMeta,
  links: ILink
}

interface IDistrictData {
  type?: string,
  attributes: IDistrictAttributes
}

interface IDistrictAttributes {
  id?: number | string;
  s_n?: number | string,
  region?: string,
  dist_code?: string,
  district_name: string,
  has_city?: boolean,
  city?: string,
  latitude?: number,
  longitude?:number,
}

export interface IMeta {
  current_page: number,
  from: number,
  last_page: number,
  path: string,
  per_page: number,
  to: number,
  total: number
}

export interface ILink {
  first: string,
  last: string,
  prev: string,
  next: string,
}

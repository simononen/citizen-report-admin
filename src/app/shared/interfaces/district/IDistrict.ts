import { ILink } from "../link/link";
import { IMeta } from "../meta/meta";

export interface IDistrict {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: IDistrictAttributes
}


export interface IDistricts  {
  data?: IDistrict[],
  meta: IMeta,
  links: ILink
}

export interface IDistrictPostData {
  data: IDistrictData
}

export interface IDistrictData {
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

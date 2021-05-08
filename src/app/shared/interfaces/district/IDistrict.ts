export interface IDistrict {
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

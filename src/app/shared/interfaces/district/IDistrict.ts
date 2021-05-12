export interface IDistrict {
  data: IDistrict
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

export interface ICounty {
  [x: string]: any;
  data: ICountyData,
  links?: Object,
  meta?: Object
}

interface ICountyData {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: ICountyAttributes

}

interface ICountyAttributes {
  id?: number | string,
  county_code?: string,
  county_name: string,
  county_constituency?: string,
  district_id?: number
}

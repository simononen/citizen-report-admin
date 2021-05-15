export interface ISubcounty {
  [x: string]: any;
  data: ISubcountydata,
  links?: Object,
  meta?: Object
}
interface ISubcountydata {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: ISubcountyAttributes

}

interface ISubcountyAttributes {
  id?: string | number,
  sub_county_code?: string,
  sub_county_name: string,
  sub_county_town_council_division?: string,
  district_id?: number
}

export interface IVillage {
  data: IVillageData,
  links?: Object,
  meta?: Object
}

interface IVillageData {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: IVillageAttributes

}

interface IVillageAttributes {
  id?: number | string,
  village_code?: string,
  village_name: string,
  village_cell?: string,
  district_id?: number,
}

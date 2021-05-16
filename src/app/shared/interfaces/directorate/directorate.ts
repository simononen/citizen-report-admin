export interface IDirectorate {
  'data': IDirectorateSummary

}

export interface IDirectorateSummary {
  'type'?: string,
  'attributes': IDirectorateAttributes
}

export interface IDirectorateAttributes {
  'numberOfDistricts': number,
  'numberOfCounties': number,
  'numberOfSubCounties': number,
  'numberOfParishes': number,
  'numberOfVillages': number,
  'numberOfFavouritePlaces': number,
  'numberOfLeaders': number,
  'numberOfContacts': number
}

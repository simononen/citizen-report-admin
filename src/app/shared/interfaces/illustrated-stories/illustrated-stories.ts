export interface IIllustratedStory {
  [x: string]: any;
  data: IIllustratedStorydata,
  links?: Object,
  meta?: Object
}

interface IIllustratedStorydata {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: IIllustratedStoryAttributes
}

interface IIllustratedStoryAttributes {
  id?: number | string,
  title?: string,
  description: string,
  content?: string,
  url?: string,
  tag?: string,
  author?: string,
  showcase?: boolean
}

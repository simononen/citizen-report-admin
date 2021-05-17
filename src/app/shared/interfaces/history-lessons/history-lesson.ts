export interface IHistoryLesson {
  [x: string]: any;
  data: IHistoryLessondata,
  links?: Object,
  meta?: Object
}

interface IHistoryLessondata {
  [x: string]: any;
  id?: string | number,
  type?: string,
  attributes: IHistoryLessonAttributes
}

interface IHistoryLessonAttributes {
  id?: number | string,
  title?: string,
  description: string,
  content?: string,
  link?: string,
  tag?: string,
  author?: string,
  showcase?: boolean
}

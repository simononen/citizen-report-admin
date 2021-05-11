export interface IUser {
  id?: string | number;
  email?: string;
  password?: string;
}

export interface IJsonAPIpost {
  type: string,
  attributes: IUser
}

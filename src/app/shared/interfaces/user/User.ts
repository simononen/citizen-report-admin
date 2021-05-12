export interface IUser {
  id?: string | number;
  email?: string;
  password?: string;
}

export interface IJsonAPILogin {
  data: ILogin
}

interface ILogin {
  type: string,
  attributes: IUser
}

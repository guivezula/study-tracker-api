export interface IUser {
    id: string;
    name: string;
    email: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface IUserFilter {
  name: string;
  email: string;
  page: number;
  limit: number;
}

export interface IUserResponse {
  data: IUser[];
  total: number;
}
export interface GenericData<T> {
  data: T;
}

export interface UserStore {
  isAuth: boolean;
  userData: null;
  accessToken: null | string;
  refreshToken: null | string;
}

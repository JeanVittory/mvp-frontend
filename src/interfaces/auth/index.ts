export interface IAuthentication {
  email: string;
  password: string;
}

export interface IAuthenticationErrors {
  email?: string;
  password?: string;
}

export interface IJwtPayload {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
}

export interface IAuthentication {
  email: string;
  password: string;
}

export interface IAuthenticationErrors {
  email?: string;
  password?: string;
}

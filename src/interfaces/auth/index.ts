export interface IAuthentication {
  email: string;
  password: string;
}

export interface IAuthenticationErrors {
  email?: string;
  password?: string;
}

export interface IJwtPayload {
  status: number;
  data: {
    ACCESS_TOKEN: string
  };
}

export interface IJwtPayloadDecoded {
  payload: {
    userEmail: string;
    userName: string;
    sessionId: string;
    userId: string;
  };
  iat: number; // Tiempo en el que se emitió el token (en segundos)
  exp: number; // Tiempo en el que expira el token (en segundos)
}
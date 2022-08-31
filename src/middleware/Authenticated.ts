import { NextFunction, Request, Response } from "express"
import { decode, verify } from "jsonwebtoken";
import config from "../config";

export const Authenticated = () => {
  return async (request: Request, response: Response, _next: NextFunction) => {

    const auth_headers = request.headers.authorization;

    if (!auth_headers)
      return response.status(401).json({ error: "Token is missing" });

    const [bearer, token] = auth_headers.split(' ');

    try {

      verify(token, config.SECRET_JWT);

      const { id, exp }: any = decode(token);

      if(exp < (new Date().getTime() + 1) / 1000 ){
        return response.status(401).json({ error: "Token is missing" });
      }

      request.user_id = id.toString();

      return _next()

    } catch (error) {
      return response.status(401).end();
    }

  }
}
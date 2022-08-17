import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { AppError } from "../errors/appError";
import "dotenv/config";

interface RequestMiddleware extends Request {
  userId: string;
  userEmail: string;
}

export const authenticationMiddleware = (
  request: RequestMiddleware,
  response: Response,
  next: NextFunction
) => {
  let token: string = request.headers.authorization;

  if (!token) {
    throw new AppError("Missing authorization headers");
  }

  let tokenSplited = token.split(" ");
  token = tokenSplited.length > 1 ? token[1] : token;

  jwt.verify(
    token,
    process.env.SECRET_KEY,
    (error: VerifyErrors, decoded: JwtPayload) => {
      if (error) {
        throw new AppError("Invalid token", 401);
      }
      request.userId = decoded.sub;
      request.userEmail = decoded.email;
      next();
    }
  );
};

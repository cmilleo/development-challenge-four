import { Request, Response } from "express";
import { createSessionService } from "../services/createSession.service";

export const createSessionController = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const token = await createSessionService(email, password);
  return response.status(200).json(token);
};

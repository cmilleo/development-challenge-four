import { Request, Response } from "express";
import { getMedicsService } from "../services/getMedics.service";

export const getMedicsController = async (request: Request, response: Response) => {
  const medics = await getMedicsService();

  return response.status(200).json(medics);
};

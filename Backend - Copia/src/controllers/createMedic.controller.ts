import { Request, Response } from "express";
import { createMedicService } from "../services/createMedic.service";

export const createMedicController = async (request: Request, response: Response) => {
  const medic = await createMedicService(request.body);
  return response.status(201).json(medic);
};

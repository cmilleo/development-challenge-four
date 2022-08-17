import { Request, Response } from "express";
import { listPatientsService } from "../services/listPatients.service";

export const listPatientsController = async (request: Request, response: Response) => {
  const patients = await listPatientsService();
  return response.status(200).json(patients);
};

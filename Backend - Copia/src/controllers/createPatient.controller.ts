import { Request, Response } from "express";
import { createPatientService } from "../services/createPatient.service";

export const createPatientController = async (request: Request, response: Response) => {
  const patient = await createPatientService(request.body);

  return response.status(201).json(patient);
};

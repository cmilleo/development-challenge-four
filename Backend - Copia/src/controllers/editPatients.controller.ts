import { Request, Response } from "express";
import { AppError } from "../errors/appError";
import { editPatientsService } from "../services/editPatients.service";

export const editPatientsController = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const editedPatient = await editPatientsService(id, request.body);
    return response.status(200).json(editedPatient);
  } catch (error) {
    throw new AppError(error.message);
  }
};

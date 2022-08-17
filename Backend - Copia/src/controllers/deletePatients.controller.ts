import { Request, Response } from "express";
import { AppError } from "../errors/appError";
import { deletePatientsService } from "../services/deletePatients.service";

export const deletePatientsController = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const deleted = await deletePatientsService(id);
    return response.status(200).json(deleted);
  } catch (error) {
    throw new AppError(error.message);
  }
};

import AppDataSource from "../data-source";
import Patients from "../entities/patients.entity";
import { AppError } from "../errors/appError";

export const deletePatientsService = async (id: string) => {
  const patientsRepository = AppDataSource.getRepository(Patients);
  const patient = await patientsRepository.findOneBy({ id });

  if (!patient) {
    throw new AppError("Patient dont exists", 401);
  }
  patientsRepository.delete(patient);
  return {
    message: "Patient has been deleted",
  };
};

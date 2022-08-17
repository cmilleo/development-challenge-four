import AppDataSource from "../data-source";
import Medics from "../entities/medics.entity";
import { IResponseCreateMedic } from "../interfaces/medics";

export const getMedicsService = async (): Promise<IResponseCreateMedic[]> => {
  const medicsRepository = AppDataSource.getRepository(Medics);

  const medics = await medicsRepository.find();
  const response = [];

  medics.forEach((medic) => {
    const newMedic = { ...medic };
    delete newMedic.password;
    return response.push(newMedic);
  });

  return response;
};

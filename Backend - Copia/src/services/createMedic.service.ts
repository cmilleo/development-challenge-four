import AppDataSource from "../data-source";
import Medics from "../entities/medics.entity";
import { AppError } from "../errors/appError";
import { IDataCreateMedic, IResponseCreateMedic } from "../interfaces/medics";
import * as bcrypt from "bcryptjs";

export const createMedicService = async (data: IDataCreateMedic): Promise<IResponseCreateMedic> => {
  const { name, email, password } = data;
  const medicRepository = AppDataSource.getRepository(Medics);
  const validatedMedic = await medicRepository.findOneBy({
    email: email,
  });

  if (validatedMedic) {
    throw new AppError("Medic already exists", 401);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const medic = medicRepository.create({ name, email, password: hashedPassword });
  if (!medic) {
    throw new AppError("Something is wrong with database, try again later", 500);
  }
  await medicRepository.save(medic);

  const response = { ...medic };
  delete response.password;
  return response;
};

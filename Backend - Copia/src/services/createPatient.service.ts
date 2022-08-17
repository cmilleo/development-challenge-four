import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Medics from "../entities/medics.entity";
import Patients from "../entities/patients.entity";
import { AppError } from "../errors/appError";
import { ICreatePatientData } from "../interfaces/patients";

export const createPatientService = async (data: ICreatePatientData): Promise<Patients> => {
  const medicRepository = AppDataSource.getRepository(Medics);
  const patientsRepository = AppDataSource.getRepository(Patients);
  const addressRepository = AppDataSource.getRepository(Address);

  const { name, birth_date, email, street, number, city, zip_code, medic } = data;

  const validatedPatient = await patientsRepository.findOneBy({
    email: data.email,
  });

  if (validatedPatient) {
    throw new AppError("Patient already exists", 401);
  }

  const address = addressRepository.create({ street, number, city, zip_code });
  await addressRepository.save(address);

  const medicObj = await medicRepository.findOneBy({
    name: medic,
  });

  const patient = patientsRepository.create({
    name: name,
    birth_date,
    email,
    address: { ...address },
    medic: { ...medicObj },
  });
  await patientsRepository.save(patient);

  console.log(patient);
  if (!address || !patient) {
    throw new AppError("Something is wrong with database, try again later", 500);
  }

  return patient;
};

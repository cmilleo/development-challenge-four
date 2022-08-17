import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Medics from "../entities/medics.entity";
import Patients from "../entities/patients.entity";
import { AppError } from "../errors/appError";

export const editPatientsService = async (id: string, data: any): Promise<Patients> => {
  const { name, birth_date, email, street, number, city, zip_code, medic } = data;
  const patientsRepository = AppDataSource.getRepository(Patients);
  const addressRepository = AppDataSource.getRepository(Address);
  const medicRepository = AppDataSource.getRepository(Medics);

  const patient = await patientsRepository.findOneBy({ id });

  if (!patient) {
    throw new AppError("Patient does not exists", 401);
  }
  const address = await addressRepository.findOneBy({ id: patient.address.id });
  const updateMedic = await medicRepository.findOneBy({ name: medic });

  if (!id) {
    throw new AppError("Missing ID", 404);
  }

  patient.name = name ? name : patient.name;
  patient.birth_date = birth_date ? birth_date : patient.birth_date;
  patient.email = email ? email : patient.email;
  address.street = street ? street : address.street;
  address.number = number ? number : address.number;
  address.city = city ? city : address.city;
  address.zip_code = zip_code ? zip_code : address.zip_code;
  patient.medic = medic ? { ...updateMedic } : patient.medic;

  patient.address = address;

  await addressRepository.save(address);
  await patientsRepository.save(patient);

  delete patient.medic.password;

  return patient;
};

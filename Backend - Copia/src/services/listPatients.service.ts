import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Patients from "../entities/patients.entity";

export const listPatientsService = async (): Promise<Patients[]> => {
  const patientsRepository = AppDataSource.getRepository(Patients);
  const patients = await patientsRepository.find();

  const response = [...patients].map(async (patient) => {
    const patientResponse = { ...patient };
    delete patientResponse.medic.password;
    return patientResponse;
  });

  return patients;
};

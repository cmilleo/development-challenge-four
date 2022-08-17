import Address from "../../entities/address.entity";
import Medics from "../../entities/medics.entity";

export interface ICreatePatientData {
  name: string;
  birth_date: string;
  email: string;
  street: string;
  number: number;
  city: string;
  zip_code: number;
  medic: string;
}

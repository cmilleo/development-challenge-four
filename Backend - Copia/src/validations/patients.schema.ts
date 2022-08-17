import * as yup from "yup";
export const createPatientSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    birth_date: yup.string().required(),
    email: yup.string().required(),
    street: yup.string().required(),
    number: yup.number().required(),
    city: yup.string().required(),
    zip_code: yup.number().required(),
    medic: yup.string().required(),
  })
  .noUnknown(true);

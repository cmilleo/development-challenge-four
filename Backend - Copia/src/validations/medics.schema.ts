import * as yup from "yup";

export const medicSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .noUnknown(true);

import * as yup from "yup";

export const sessionSchema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .noUnknown(true);

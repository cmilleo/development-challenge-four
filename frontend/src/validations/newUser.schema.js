import * as yup from "yup";

export const newUserSchema = yup
  .object()
  .shape({
    name: yup.string().required("Insira o nome do paciente"),
    email: yup
      .string()
      .email("Insira um email valido")
      .required("Insira o email do paciente"),
    street: yup.string().required("Rua é obrigatório"),
    number: yup.string().required("Insira o número da residência"),
    city: yup.string().required("Insira a cidade"),
    zip_code: yup
      .string()
      .min(8, "CEP deve conter 8 digitos")
      .max(8, "CEP deve conter 8 digitos")
      .required("Insira o CEP"),
  })
  .noUnknown(true);

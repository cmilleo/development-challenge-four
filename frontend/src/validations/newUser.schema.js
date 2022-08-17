import * as yup from "yup";

export const newUserSchema = yup
  .object()
  .shape({
    name: yup.string().required("Insira o nome do paciente").max(200, "Nome muito grande"),
    email: yup
      .string()
      .email("Insira um email valido")
      .required("Insira o email do paciente")
      .max(200, "Email muito grande"),
    street: yup.string().required("Rua é obrigatório").max(200, "Nome muito grande"),
    number: yup.string().required("Insira o número da residência"),
    city: yup.string().required("Insira a cidade").max(200, "Nome muito grande"),
    zip_code: yup
      .string()
      .min(8, "CEP deve conter 8 digitos")
      .max(8, "CEP deve conter 8 digitos")
      .required("Insira o CEP"),
  })
  .noUnknown(true);

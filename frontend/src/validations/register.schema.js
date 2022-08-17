import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Insira seu nome"),
  email: yup.string().email("Insira um email valido").required("Email é obrigatório"),
  password: yup.string().required("Insira sua senha"),
});

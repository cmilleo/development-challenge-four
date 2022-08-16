import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Insira um email valido").required("Email é obrigatório"),
  password: yup.string().required("Insira sua senha"),
});

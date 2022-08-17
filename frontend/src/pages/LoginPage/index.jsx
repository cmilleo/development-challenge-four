import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { Container } from "./styles";

import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from "react-icons/ai";

import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/login.schema";
import { PrimaryButton } from "../../styles/Global";
import { useHistory } from "react-router-dom";
import { MedicsContext } from "../../providers/Medics/Medics";
import { SuccessRequisitonAnimation } from "../../components/SuccessRequisitonAnimation";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const { loginUser, successAnimation } = useContext(MedicsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const submit = async (data) => {
    await loginUser(data);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {successAnimation && <SuccessRequisitonAnimation />}
      <div className="containerModal">
        <div className="headerModal">
          <h3>Login</h3>
          <AiOutlineClose className="backLanding" onClick={() => history.push("/")}>
            X
          </AiOutlineClose>
        </div>
        <div className="iconHeader">
          <BsFillPersonFill />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors?.email?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MdEmail />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            variant="standard"
            label="Senha"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            error={!!errors.password}
            helperText={errors?.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!showPassword ? (
                    <AiFillEye onClick={handlePassword} />
                  ) : (
                    <AiFillEyeInvisible onClick={handlePassword} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <PrimaryButton>Entrar</PrimaryButton>
        </form>
        <div className="dontHaveAccount">
          <span>Ainda não tem conta?</span>
          <button onClick={() => history.push("/register")}>Cadastre-se</button>
        </div>
      </div>
    </Container>
  );
};

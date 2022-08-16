import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { Container } from "./styles";

import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from "react-icons/ai";

import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryButton } from "../../styles/Global";
import { useHistory } from "react-router-dom";
import { MedicsContext } from "../../providers/Medics/Medics";
import { registerSchema } from "../../validations/register.schema";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const { signUpUser } = useContext(MedicsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const submit = async (data) => {
    await signUpUser(data);

    console.log(data);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <div className="containerModal">
        <div className="headerModal">
          <h3>Registro</h3>
          <AiOutlineClose
            className="backLanding"
            onClick={() => history.push("/")}
          >
            X
          </AiOutlineClose>
        </div>
        <div className="iconHeader">
          <BsFillPersonPlusFill />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            fullWidth
            variant="standard"
            label="Nome"
            {...register("name")}
            error={!!errors.name}
            helperText={errors?.name?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BsFillPersonFill />
                </InputAdornment>
              ),
            }}
          />
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
          <PrimaryButton>Cadastrar</PrimaryButton>
        </form>
        <div className="dontHaveAccount">
          <span>Já possui conta?</span>
          <button onClick={() => history.push("/login")}>Entre aqui</button>
        </div>
      </div>
    </Container>
  );
};

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import ptLocale from "date-fns/locale/pt-BR";

import { newUserSchema } from "../../validations/newUser.schema";
import { TextField } from "@mui/material";
import { PatientsContext } from "../../providers/Patients/Patients";
import { MedicsContext } from "../../providers/Medics/Medics";
import { PrimaryButton } from "../../styles/Global";

function NewPatientDesktop() {
  const [value, setValue] = useState(new Date("2021/01/01"));
  const { createPatient } = useContext(PatientsContext);
  const { user } = useContext(MedicsContext);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newUserSchema) });

  const localeMap = {
    br: ptLocale,
  };

  const submit = async (data) => {
    data.medic = user.name;
    data.birth_date = value;
    const response = await createPatient(data);
    if (!response) {
      return;
    }
    toast.success("Paciente cadastrado com sucesso!");
  };

  return (
    <Container>
      <div className="containerModal">
        <form className="formPatientDesktop" onSubmit={handleSubmit(submit)}>
          <div className="headerModal">
            <h4>Cadastro de paciente</h4>
          </div>
          <TextField
            fullWidth
            variant="standard"
            label="Nome"
            {...register("name")}
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <label className="birthLabel">
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap.br}>
              <span>Data de Nascimento</span>
              <MobileDatePicker
                inputFormat="dd/MM/yyyy"
                size="small"
                fullWidth
                views={["day", "month", "year"]}
                value={value}
                disableFuture={true}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </label>
          <div className="containerEndececo">
            <span>Endereço</span>
            <TextField
              fullWidth
              variant="standard"
              size="small"
              label="Rua"
              {...register("street")}
              error={!!errors.street}
              helperText={errors?.street?.message}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Número"
              type="number"
              {...register("number")}
              error={!!errors.number}
              helperText={errors?.number?.message}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Cidade"
              {...register("city")}
              error={!!errors.city}
              helperText={errors?.city?.message}
            />
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="CEP"
              {...register("zip_code")}
              error={!!errors.zip_code}
              helperText={errors?.zip_code?.message}
            />
          </div>
          <PrimaryButton>Cadastrar paciente</PrimaryButton>
        </form>
      </div>
    </Container>
  );
}

export default NewPatientDesktop;

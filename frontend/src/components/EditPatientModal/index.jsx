import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import ptLocale from "date-fns/locale/pt-BR";

import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PrimaryButton } from "../../styles/Global";

function EditPatientModal({
  patient,
  setShowEditPatientModal,
  handleEditPatient,
}) {
  const [value, setValue] = useState(new Date(patient.birth_date));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const { register, handleSubmit } = useForm();

  const localeMap = {
    br: ptLocale,
  };

  const submit = (data) => {
    data.birth_date = value;
    handleEditPatient(patient.id, data);
  };

  return (
    <Container>
      <div className="containerModal">
        <div className="headerModal">
          <h4>Editar Paciente</h4>
          <AiOutlineClose onClick={() => setShowEditPatientModal(false)} />
        </div>
        <form className="formPatient" onSubmit={handleSubmit(submit)}>
          <TextField
            fullWidth
            variant="standard"
            label="Nome"
            {...register("name")}
            defaultValue={patient.name}
          />
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            {...register("email")}
            defaultValue={patient.email}
          />
          <label className="birthLabel">
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={localeMap.br}
            >
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
              defaultValue={patient.address.street}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Número"
              type="number"
              {...register("number")}
              defaultValue={patient.address.number}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Cidade"
              {...register("city")}
              defaultValue={patient.address.city}
            />
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="CEP"
              {...register("zip_code")}
              defaultValue={patient.address.zip_code}
            />
          </div>
          <PrimaryButton>Editar paciente</PrimaryButton>
        </form>
      </div>
    </Container>
  );
}

export default EditPatientModal;

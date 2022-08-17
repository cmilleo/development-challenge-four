import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { MedicsContext } from "../Medics/Medics";

export const PatientsContext = createContext([]);

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const { user } = useContext(MedicsContext);
  useEffect(() => {
    api.get("/patients").then((res) => {
      setPatients(res.data.filter((patient) => patient.medic.id === user?.id));
    });
  }, [patients]);

  const createPatient = async (formData) => {
    try {
      const response = await api.post("/patients", formData);
      setPatients([...patients, response.data]);
      return response.data;
    } catch (error) {
      toast.error("Paciente já existe!");
    }
  };

  /*  const getPatient = async (id) => {
    const response = await api.get("/patients");
    const selectedPatient = response.find((patient) => patient.id === id);

    if (!selectedPatient) {
      return toast.error("Paciente não encontrado!");
    }

    return selectedPatient;
  }; */

  const updatePatient = async (id, formData) => {
    try {
      const response = await api.patch(`/patients/${id}`, formData);

      const newPatients = patients.filter((patient) => patient.id !== id);

      setPatients([...newPatients, response.data]);
    } catch (error) {
      toast.error("Paciente não encontrado!");
    }
  };

  const deletePatient = async (id) => {
    try {
      await api.delete(`/patients/${id}`);
      const newPatients = patients.filter((patient) => patient.id !== id);
      setPatients(newPatients);
    } catch (error) {
      toast.error("Paciente não encontrado!");
    }
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        setPatients,
        createPatient,
        updatePatient,
        deletePatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

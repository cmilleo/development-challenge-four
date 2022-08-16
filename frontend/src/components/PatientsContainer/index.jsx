import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../providers/Filter/Filter";
import { PatientsContext } from "../../providers/Patients/Patients";
import Patients from "../Patients";
import { Container } from "./styles";

function PatientsContainer() {
  const { patients } = useContext(PatientsContext);
  const [apliedFilter, setApliedFilter] = useState([]);
  const { filtered } = useContext(FilterContext);
  useEffect(() => {
    setApliedFilter(filtered);
  }, [filtered]);
  return (
    <Container>
      {filtered.length > 0 ? (
        filtered.map((patient) => {
          return <Patients patient={patient} key={patient.id} />;
        })
      ) : patients.length > 0 ? (
        patients.map((patient) => {
          return <Patients patient={patient} key={patient.id} />;
        })
      ) : (
        <h4>Ainda nenhum paciente cadastrado</h4>
      )}
    </Container>
  );
}

export default PatientsContainer;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { Filter } from "../../components/Filter";
import { NewPatientMobile } from "../../components/NewPatientMobile";
import PatientsContainer from "../../components/PatientsContainer";

export const Home = () => {
  const history = useHistory();
  if (!localStorage.getItem("@MedCloud:token")) {
    history.push("/");
    toast.error("Você deve estar logado para acessar essa pagina");
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(e.target.innerWidth);
    });
  });

  return (
    <Container>
      <Header />
      {windowSize <= 850 && <NewPatientMobile />}
      <Filter />
      <PatientsContainer />
    </Container>
  );
};

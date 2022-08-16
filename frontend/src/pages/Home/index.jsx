import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { Filter } from "../../components/Filter";

export const Home = () => {
  const history = useHistory();
  if (!localStorage.getItem("@MedCloud:token")) {
    history.push("/");
    toast.error("Você deve estar logado para acessar essa pagina");
  }
  return (
    <Container>
      <Header />
      <Filter />
    </Container>
  );
};

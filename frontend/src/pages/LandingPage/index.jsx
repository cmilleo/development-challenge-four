import React, { useEffect, useState } from "react";
import { LandingPageAnimation } from "../../components/LandingPageAnimation";
import { PrimaryButton } from "../../styles/Global";

import { Container } from "./styles";

export const LandingPage = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(e.target.innerWidth);
    });
  });

  return (
    <Container>
      {windowSize <= 800 && (
        <div className="containerTitle">
          <h1>
            Gestão de <span>pacientes</span>
          </h1>
          <h2>
            <span>simples</span> e <span>fácil</span>
          </h2>
        </div>
      )}
      <LandingPageAnimation />
      <div className="containerDetails">
        {windowSize >= 800 && (
          <div className="containerTitle">
            <h1>
              Gestão de <span>pacientes</span>
            </h1>
            <h2>
              <span>simples</span> e <span>fácil</span>
            </h2>
          </div>
        )}
        <PrimaryButton width="80%" style={{ margin: "0 auto" }}>
          Entrar
        </PrimaryButton>
      </div>
      {windowSize >= 1200 && <div className="shape"></div>}
    </Container>
  );
};

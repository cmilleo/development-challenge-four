import React from "react";

import Container from "./styles";
import { BsCheckLg } from "react-icons/bs";

export const SuccessRequisitonAnimation = () => {
  return (
    <Container>
      <div className="bgModal">
        <div className="modal">
          <BsCheckLg size={100} color="#fff" />
        </div>
      </div>
    </Container>
  );
};

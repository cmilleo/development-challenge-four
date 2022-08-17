import React from "react";

import { Container } from "./styles";
import medcloudLogo from "../../assets/images/medcloud_logo.png";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    toast.success("Voce saiu!");
    localStorage.clear();
    setTimeout(() => {
      history.push("/");
    }, 2500);
  };
  return (
    <Container>
      <div className="containerHeader">
        <img src={medcloudLogo} alt="Logo da medcloud" />
        <button onClick={handleLogout} className="logoutBtn">
          Logout
        </button>
      </div>
    </Container>
  );
};

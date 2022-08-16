import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const MedicsContext = createContext({});

export const MedicsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [successAnimation, setSuccesAnimation] = useState(false);
  const history = useHistory();

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/login", formData);

      const token = response.data.token;

      api.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("@MedCloud:token", token);
      console.log(response);
      setUser(response.data.user);

      setSuccesAnimation(true);
      setTimeout(() => {
        setSuccesAnimation(false);
        history.push("/home");
      }, 3500);
    } catch (error) {
      return toast.error("Email ou senha incorretos!");
    }
  };

  const signUpUser = async (formData) => {
    try {
      const response = await api.post("/medics", formData);
      console.log(response);
    } catch (error) {
      toast.error("Email já cadastrado");
    }
  };

  return (
    <MedicsContext.Provider value={{ signUpUser, loginUser, successAnimation, user }}>
      {children}
    </MedicsContext.Provider>
  );
};

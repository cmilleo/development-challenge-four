import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const MedicsContext = createContext({});

export const MedicsProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/login", formData);

      const token = response.data.token;

      api.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("@MedCloud:token", token);
      console.log(response);
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

  return <MedicsContext.Provider value={{ signUpUser, loginUser }}>{children}</MedicsContext.Provider>;
};

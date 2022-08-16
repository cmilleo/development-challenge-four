import { createContext, useContext, useState } from "react";
import { PatientsContext } from "../Patients/Patients";

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
  const [filtered, setFiltered] = useState(null);
  const { patients } = useContext(PatientsContext);

  const applyFilter = (data) => {
    const requestFilter = data
      .toLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
      .trim();

    const results = patients.filter((patient) => {
      return (
        patient.name
          .toLowerCase()
          .split("")
          .sort((a, b) => a.localeCompare(b))
          .join("")
          .trim()
          .includes(requestFilter) ||
        patient.email
          .toLowerCase()
          .split("")
          .sort((a, b) => a.localeCompare(b))
          .join("")
          .trim()
          .includes(requestFilter)
      );
    });
    if (!results) {
      setFiltered(-1);
      return;
    }
    console.log(requestFilter);
    setFiltered(results);
  };

  return <FilterContext.Provider value={{ filtered, setFiltered, applyFilter }}>{children}</FilterContext.Provider>;
};

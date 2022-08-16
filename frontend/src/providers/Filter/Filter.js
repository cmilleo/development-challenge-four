import { createContext, useContext, useState } from "react";
import { PatientsContext } from "../Patients/Patients";

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
  const [filtered, setFiltered] = useState([]);
  const { patients } = useContext(PatientsContext);

  const applyFilter = (data) => {
    const requestFilter = data
      .toLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
      .trim();

    if (requestFilter.length <= 1) {
      return setFiltered([]);
    }

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
      setFiltered([]);
      return;
    }
    console.log(results);
    setFiltered(() => {
      return results;
    });
  };

  return (
    <FilterContext.Provider value={{ filtered, setFiltered, applyFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

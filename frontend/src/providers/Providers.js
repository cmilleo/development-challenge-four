import { FilterProvider } from "./Filter/Filter";
import { MedicsProvider } from "./Medics/Medics";
import { PatientsProvider } from "./Patients/Patients";

const Providers = ({ children }) => {
  return (
    <MedicsProvider>
      <PatientsProvider>
        <FilterProvider>{children}</FilterProvider>
      </PatientsProvider>
    </MedicsProvider>
  );
};

export default Providers;

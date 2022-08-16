import { MedicsProvider } from "./Medics/Medics";
import { PatientsProvider } from "./Patients/Patients";

const Providers = ({ children }) => {
  return (
    <MedicsProvider>
      <PatientsProvider>{children}</PatientsProvider>
    </MedicsProvider>
  );
};

export default Providers;

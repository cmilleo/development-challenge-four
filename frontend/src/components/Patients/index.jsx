import { Container } from "./styles";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { PatientsContext } from "../../providers/Patients/Patients";
import { toast } from "react-toastify";
import { ConfirmDeletePatientModal } from "../ConfirmDeletePatientModal";

function Patients({ patient }) {
  const { name, birth_date, email } = patient;
  const { street, number, city, zip_code } = patient.address;

  const [showModalDelete, setShowModalDelete] = useState(false);

  const { deletePatient } = useContext(PatientsContext);

  const zipCodeMask =
    String(zip_code).split("").slice(0, 5).join("") +
    "-" +
    String(zip_code).split("").slice(5).join("");

  const handleDeletePatient = () => {
    deletePatient(patient.id);
    toast.success("Paciente deletado com sucesso!");
  };
  return (
    <Container>
      {showModalDelete && (
        <ConfirmDeletePatientModal
          name={name}
          handleDeletePatient={handleDeletePatient}
          id={patient.id}
          setShowModalDelete={setShowModalDelete}
        />
      )}
      <h5>Paciente:</h5>
      <h3>{name}</h3>
      <h5>Email:</h5>
      <p>{email}</p>
      <h5>Nascimento:</h5>
      <p>{birth_date}</p>
      <h5>Endereço:</h5>
      <p>
        {street}, {number}, {city}, {zipCodeMask}
      </p>
      <div className="containerButtons">
        <button>
          <FaEdit />
        </button>
        <button onClick={() => setShowModalDelete(true)}>
          <MdDelete />
        </button>
      </div>
    </Container>
  );
}

export default Patients;

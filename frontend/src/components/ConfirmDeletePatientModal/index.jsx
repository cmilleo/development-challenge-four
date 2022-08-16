import { Button } from "@mui/material";
import { Container } from "./styles";

export const ConfirmDeletePatientModal = ({
  name,
  handleDeletePatient,
  id,
  setShowModalDelete,
}) => {
  return (
    <Container>
      <div className="containerModal">
        <p>Tem certeza que deseja excluir {name}?</p>
        <div className="containerButton">
          <Button onClick={() => handleDeletePatient(id)}>Confirmar</Button>
          <Button onClick={() => setShowModalDelete(false)}>Cancelar</Button>
        </div>
      </div>
    </Container>
  );
};

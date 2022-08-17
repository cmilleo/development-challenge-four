import { Router } from "express";
import { createPatientController } from "../controllers/createPatient.controller";
import { deletePatientsController } from "../controllers/deletePatients.controller";
import { editPatientsController } from "../controllers/editPatients.controller";
import { listPatientsController } from "../controllers/listPatients.controller";
import { authenticationMiddleware } from "../middleware/authentication.middleware";
import { schemaValidation } from "../middleware/schemaValidation.middleware";
import { createPatientSchema } from "../validations/patients.schema";

export const patientsRoutes = Router();

patientsRoutes.post(
  "",
  authenticationMiddleware,
  schemaValidation(createPatientSchema),
  createPatientController
);

patientsRoutes.get("", listPatientsController);

patientsRoutes.patch("/:id", authenticationMiddleware, editPatientsController);

patientsRoutes.delete(
  "/:id",
  authenticationMiddleware,
  deletePatientsController
);

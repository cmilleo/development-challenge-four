import { Router } from "express";
import { createMedicController } from "../controllers/createMedic.controller";
import { getMedicsController } from "../controllers/getMedics.controller";
import { schemaValidation } from "../middleware/schemaValidation.middleware";
import { medicSchema } from "../validations/medics.schema";

export const medicsRoutes = Router();

medicsRoutes.post("", schemaValidation(medicSchema), createMedicController);

medicsRoutes.get("", getMedicsController);

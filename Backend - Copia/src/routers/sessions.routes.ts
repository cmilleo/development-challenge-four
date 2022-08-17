import { Router } from "express";
import { createSessionController } from "../controllers/createSession.controller";
import { schemaValidation } from "../middleware/schemaValidation.middleware";
import { sessionSchema } from "../validations/session.schema";

export const sessionsRoutes = Router();

sessionsRoutes.post("", schemaValidation(sessionSchema), createSessionController);

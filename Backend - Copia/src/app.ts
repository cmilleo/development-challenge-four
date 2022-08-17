import express from "express";
import "express-async-errors";
import handleAppErrorMiddeware from "./middleware/handleAppError.middleware";
import { medicsRoutes } from "./routers/medics.routes";
import cors from "cors";
import { sessionsRoutes } from "./routers/sessions.routes";
import { patientsRoutes } from "./routers/patients.routes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/medics", medicsRoutes);
app.use("/login", sessionsRoutes);
app.use("/patients", patientsRoutes);
app.use(handleAppErrorMiddeware);
export default app;

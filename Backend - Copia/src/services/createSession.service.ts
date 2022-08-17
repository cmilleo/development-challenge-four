import AppDataSource from "../data-source";
import Medics from "../entities/medics.entity";
import { AppError } from "../errors/appError";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ISessionResponse } from "../interfaces/session";

export const createSessionService = async (email: string, password: string): Promise<ISessionResponse> => {
  const medicRepository = AppDataSource.getRepository(Medics);

  const medic = await medicRepository.findOneBy({ email });

  if (!medic) {
    throw new AppError("Invalid email or password", 401);
  }

  const passwordCompared = await bcrypt.compare(password, medic.password);

  if (!passwordCompared) {
    throw new AppError("Invalid email or password", 401);
  }
  const response = { ...medic };
  delete response.password;
  const token = jwt.sign({ email: medic.email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: medic.id,
  });

  return {
    token: token,
    user: { ...response },
  };
};

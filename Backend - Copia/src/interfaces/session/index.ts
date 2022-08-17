import Medics from "../../entities/medics.entity";

export interface ISessionResponse {
  token: string;
  user: Medics;
}

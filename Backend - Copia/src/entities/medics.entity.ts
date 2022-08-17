import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Patients from "./patients.entity";

@Entity("medics")
class Medics {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    length: 100,
  })
  name: string;
  @Column({
    length: 100,
  })
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Patients, (patients) => patients.medic)
  patients: Patients[];
}
export default Medics;

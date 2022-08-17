import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import Address from "./address.entity";
import Medics from "./medics.entity";

@Entity("patients")
class Patients {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    length: 100,
  })
  name: string;
  @Column()
  birth_date: string;
  @Column()
  email: string;
  @OneToOne(() => Address, { eager: true, nullable: false, onDelete: "CASCADE" })
  @JoinColumn({
    name: "address_id",
  })
  address: Address;
  @ManyToOne(() => Medics, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({
    name: "medic_id",
  })
  medic: Medics;
}
export default Patients;

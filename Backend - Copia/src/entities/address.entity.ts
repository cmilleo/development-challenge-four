import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  street: string;
  @Column()
  number: number;
  @Column()
  city: string;
  @Column()
  zip_code: number;
}

export default Address;

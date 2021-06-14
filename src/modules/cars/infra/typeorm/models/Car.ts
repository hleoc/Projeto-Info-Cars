import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Length } from "class-validator";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(8)
  placa: string;

  @Column()
  @Length(17)
  chassi: string;

  @Column()
  @Length(11)
  renavam: number;

  @Column()
  @Length(255)
  model: string;

  @Column()
  @Length(255)
  brand: string;

  @Column()
  @Length(4)
  year: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Car;

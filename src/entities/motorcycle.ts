import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Motorcycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;
}
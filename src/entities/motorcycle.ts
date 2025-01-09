import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Motorcycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  model: string;

  @Column({ type: 'varchar' })
  brand: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
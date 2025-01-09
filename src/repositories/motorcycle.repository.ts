import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Motorcycle } from '../entities/motorcycle';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MotorcycleRepository {
  constructor(
    @InjectRepository(Motorcycle)
    private readonly repository: Repository<Motorcycle>,
  ) {}

  async createMotorcycle(motorcycle: Motorcycle): Promise<Motorcycle> {
    return this.repository.save(motorcycle);
  }
}
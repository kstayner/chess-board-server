import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from '../../repositories/motorcycle.repository';
import { Motorcycle } from '../../entities/motorcycle';

@Injectable()
export class MotorcycleService {
  constructor(private readonly motorcycleRepository: MotorcycleRepository) {}

  async createMotorcycle(motorcycleData: Partial<Motorcycle>): Promise<Motorcycle> {
    const motorcycle = new Motorcycle();
    Object.assign(motorcycle, motorcycleData);
    return this.motorcycleRepository.createMotorcycle(motorcycle);
  }
}
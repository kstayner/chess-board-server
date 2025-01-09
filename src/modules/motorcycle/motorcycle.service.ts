import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from 'src/repositories/motorcycle.repository';
import { Motorcycle } from 'src/entities/motorcycle';

@Injectable()
export class MotorcycleService {
  constructor(private readonly motorcycleRepository: MotorcycleRepository) {}

  async createMotorcycle(motorcycleData: Partial<Motorcycle>): Promise<Motorcycle> {
    const motorcycle = this.motorcycleRepository.create(motorcycleData);
    return this.motorcycleRepository.save(motorcycle);
  }

  async getMotorcycles(): Promise<Motorcycle[]> {
    return this.motorcycleRepository.find();
  }

  async getMotorcycleById(id: number): Promise<Motorcycle> {
    return this.motorcycleRepository.findOne(id);
  }

  async updateMotorcycle(id: number, motorcycleData: Partial<Motorcycle>): Promise<Motorcycle> {
    await this.motorcycleRepository.update(id, motorcycleData);
    return this.getMotorcycleById(id);
  }

  async deleteMotorcycle(id: number): Promise<void> {
    await this.motorcycleRepository.delete(id);
  }
}
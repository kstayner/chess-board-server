import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from 'src/repositories/motorcycles.repository';

@Injectable()
export class MotorcycleService {
    constructor(private readonly motorcycleRepository: MotorcycleRepository) {}

    // Add business logic methods here
}
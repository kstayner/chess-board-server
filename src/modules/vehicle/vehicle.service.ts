import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleRepository } from '../../repositories/vehicles.repository';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from '../../entities/vehicles';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleRepository)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async createVehicle(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    return this.vehicleRepository.save(vehicle);
  }
}
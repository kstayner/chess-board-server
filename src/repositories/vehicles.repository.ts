import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Vehicle } from '../entities/vehicles';

@EntityRepository(Vehicle)
@Injectable()
export class VehicleRepository extends Repository<Vehicle> {}
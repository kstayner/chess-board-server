import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { VehicleRepository } from '../../repositories/vehicles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleRepository])],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
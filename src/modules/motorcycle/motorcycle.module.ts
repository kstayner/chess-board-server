import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motorcycle } from '../../entities/motorcycle';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleController } from './motorcycle.controller';
import { MotorcycleRepository } from '../../repositories/motorcycle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Motorcycle])],
  providers: [MotorcycleService, MotorcycleRepository],
  controllers: [MotorcycleController],
})
export class MotorcycleModule {}
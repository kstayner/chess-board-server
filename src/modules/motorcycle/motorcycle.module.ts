import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motorcycle } from 'src/entities/motorcycles';
import { MotorcycleRepository } from 'src/repositories/motorcycles.repository';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleController } from './motorcycle.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Motorcycle])],
    providers: [MotorcycleService, MotorcycleRepository],
    controllers: [MotorcycleController],
})
export class MotorcycleModule {}
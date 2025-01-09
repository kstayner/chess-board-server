import { Controller, Post, Body } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { Motorcycle } from '../../entities/motorcycle';

@Controller('motorcycles')
export class MotorcycleController {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Post()
  async create(@Body() motorcycleData: Partial<Motorcycle>) {
    return this.motorcycleService.createMotorcycle(motorcycleData);
  }
}
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { Motorcycle } from 'src/entities/motorcycle';

@Controller('motorcycles')
export class MotorcycleController {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Post()
  async create(@Body() motorcycleData: Partial<Motorcycle>) {
    return this.motorcycleService.createMotorcycle(motorcycleData);
  }

  @Get()
  async findAll() {
    return this.motorcycleService.getMotorcycles();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.motorcycleService.getMotorcycleById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() motorcycleData: Partial<Motorcycle>) {
    return this.motorcycleService.updateMotorcycle(id, motorcycleData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.motorcycleService.deleteMotorcycle(id);
  }
}
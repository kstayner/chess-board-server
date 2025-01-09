import { Controller, Get } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';

@Controller('motorcycles')
export class MotorcycleController {
    constructor(private readonly motorcycleService: MotorcycleService) {}

    @Get()
    findAll() {
        // Implement endpoint logic here
    }
}
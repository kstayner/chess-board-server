import { IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  manufacturer: string;

  @IsString()
  model: string;
}
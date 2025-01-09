import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Motorcycle } from 'src/entities/motorcycle';

@Injectable()
export class MotorcycleRepository extends BaseRepository<Motorcycle> {}
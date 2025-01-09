import { GameModule } from './game/game.module';

import { HealthCheckModule } from './health-check/health-check.module';

import { MotorcycleModule } from './motorcycle/motorcycle.module';

@Module({
  imports: [
    // other modules
    MotorcycleModule,
  ],
})
export class AppModule {}

export default [HealthCheckModule, GameModule];
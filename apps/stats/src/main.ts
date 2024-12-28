import { NestFactory } from '@nestjs/core';
import { StatsModule } from './stats.module';

async function bootstrap() {
  const app = await NestFactory.create(StatsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

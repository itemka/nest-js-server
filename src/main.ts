import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log']
  });

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}

bootstrap();

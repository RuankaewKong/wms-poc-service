import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.SERVER_PORT ?? 8000;
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log', 'error', 'warn'],
  });
  app.setGlobalPrefix('/api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(port);
}
bootstrap();

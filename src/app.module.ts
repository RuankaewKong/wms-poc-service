import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.warehouse.config';
import { WarehouseModule } from './modules/warehouse-module/warehouse.module';
import { RequestorModule } from './modules/requestor/requestor.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './auth-strategies/auth-header-jwt-bearer.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConfig,
    }),
    WarehouseModule,
    RequestorModule,
    AuthModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}

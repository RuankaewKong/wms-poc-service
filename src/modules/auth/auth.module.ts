import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { AuthController } from './auth.controller';
import { ExchangeGoogleTokenUsecase } from './usecase/exchange-google-token.usecase';
import { GoogleOauth } from './services/google-oauth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    DataAccessLayerModule,
    JwtModule.registerAsync({
      useFactory: async (configservice: ConfigService) => ({
        secret: configservice.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [ExchangeGoogleTokenUsecase, GoogleOauth, UserService],
})
export class AuthModule {}

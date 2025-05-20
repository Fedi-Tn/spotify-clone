import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';
import { JWTStrategy } from './jwt-strategy';
import { ArtistsModule } from '../artists/artists.module';

@Module({
  imports: [
    UsersModule,
    ArtistsModule,
    JwtModule.register({
      secret: authConstants.secret,
      signOptions: {
        // 1.
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}

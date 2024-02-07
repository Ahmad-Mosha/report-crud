import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { AuthService } from './auth.service';
import { GetUserInterceptor } from 'src/interceptors/get-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    UsersRepository,
    AuthService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: GetUserInterceptor,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}

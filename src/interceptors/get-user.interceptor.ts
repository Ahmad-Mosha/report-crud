import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GetUserInterceptor implements NestInterceptor {
  constructor(private userService: UsersService) {}
  intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};
    if (userId) {
      const user = this.userService.findOne(userId);
      request.user = user;
    }
    return handler.handle();
  }
}

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
export declare class GetUserInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UsersService);
    intercept(context: ExecutionContext, handler: CallHandler): import("rxjs").Observable<any>;
}

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private readonly usersSerivce;
    constructor(usersSerivce: UsersService);
    signup(payload: CreateUserDto): Promise<void>;
    signin(payload: CreateUserDto): Promise<import("./entity/user.entity").User>;
    whoAmI(user: any): Promise<any>;
}

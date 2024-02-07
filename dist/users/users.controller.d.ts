import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { User } from './entity/user.entity';
export declare class UsersController {
    private readonly service;
    private readonly authService;
    constructor(service: UsersService, authService: AuthService);
    createUser(payload: CreateUserDto): Promise<void>;
    signup(payload: CreateUserDto): Promise<void>;
    signin(payload: CreateUserDto, session: any): Promise<User>;
    signout(session: any): Promise<void>;
    getAllUsers(email: string): Promise<User[]>;
    whoAmI(user: User): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, payload: UpdateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
}

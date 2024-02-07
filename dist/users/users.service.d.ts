import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private repo;
    constructor(repo: UsersRepository);
    create(payload: CreateUserDto): Promise<void>;
    getAll(email: string): Promise<import("./entity/user.entity").User[]>;
    getByEmail(email: string): Promise<import("./entity/user.entity").User>;
    findOne(id: string): Promise<import("./entity/user.entity").User>;
    update(id: string, payload: UpdateUserDto): Promise<string>;
    delete(id: string): Promise<string>;
}

import { User } from './entity/user.entity';
import { DataSource, Repository } from 'typeorm';
export declare class UsersRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    createUser(payload: any): Promise<void>;
}

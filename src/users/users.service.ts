import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repo: UsersRepository) {}

  async create(payload: CreateUserDto) {
    return await this.repo.createUser(payload);
  }

  async getAll(email: string) {
    const query = this.repo.createQueryBuilder('user');
    if (email) {
      query.andWhere('user.email = :email', { email });
    }
    const users = await query.getMany();
    return users;
  }

  async getByEmail(email: string) {
    const user = await this.repo.findOne({ where: { email } });
    return user || null;
  }

  async findOne(id: string) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, payload: UpdateUserDto) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    Object.assign(user, payload);
    await this.repo.save(user);
    return 'User updated successfully';
  }

  async delete(id: string) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.repo.remove(user);
    return 'User deleted successfully';
  }
}

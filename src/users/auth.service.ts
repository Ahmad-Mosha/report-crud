import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersSerivce: UsersService) {}

  async signup(payload: CreateUserDto) {
    const isEmailUsed = await this.usersSerivce.getByEmail(payload.email);
    if (isEmailUsed !== null) {
      throw new BadRequestException('Email already taken');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(payload.password, salt);
    const newUser = await this.usersSerivce.create({
      ...payload,
      password: hashedPassword,
    });
    return newUser;
  }

  async signin(payload: CreateUserDto) {
    const user = await this.usersSerivce.getByEmail(payload.email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }
    return user;
  }

  async whoAmI(user: any) {
    return user;
  }
}

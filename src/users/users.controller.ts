import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { GetUser } from 'src/decorators/get-user.decorator';
import { User } from './entity/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
@serialize(UserDto)
export class UsersController {
  constructor(
    private readonly service: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('create')
  async createUser(@Body() payload: CreateUserDto) {
    return this.service.create(payload);
  }

  @Post('signup')
  async signup(@Body() payload: CreateUserDto) {
    return this.authService.signup(payload);
  }

  @Post('signin')
  @HttpCode(200)
  async signin(@Body() payload: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(payload);
    session.userId = user.id;
    return user;
  }

  @Post('signout')
  async signout(@Session() session: any) {
    session.userId = null;
  }
  @Get()
  async getAllUsers(@Query('email') email: string) {
    console.log(email);
    return this.service.getAll(email);
  }

  @Get('whoami')
  async whoAmI(@GetUser() user: User) {
    return user;
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.service.getByEmail(email);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async updateUser(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.service.delete(id);
  }
}

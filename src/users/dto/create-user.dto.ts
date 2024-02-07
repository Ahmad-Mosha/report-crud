import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Matches(/(?=.*[a-z])(?=.*[0-9])/, {
    message: 'password must contain at least 1 lowercase letter and 1 number',
  })
  @IsNotEmpty()
  password: string;
}

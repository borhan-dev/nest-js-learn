import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Please Enter Your Username' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Please Enter Your Password' })
  password: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Please Enter Your Email' })
  email: string;
}

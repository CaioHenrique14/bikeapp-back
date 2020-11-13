import { IsEmail, IsNotEmpty } from 'class-validator'

export class UserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  phone: string

  @IsNotEmpty()
  password: string
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string
  @IsNotEmpty()
  password: string
}

export interface AuthPayload {
  email: string
}

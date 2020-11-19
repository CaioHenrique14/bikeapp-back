import { LoginDto } from './../user/dto/user.dto'
import { AuthService } from './auth.service'
import { Body, Controller, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  login(@Body() credentials: LoginDto) {
    return this.authService.login(credentials)
  }
}

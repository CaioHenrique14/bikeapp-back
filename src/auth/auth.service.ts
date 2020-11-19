import { LoginDto } from './../user/dto/user.dto'
import { UserService } from './../user/user.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}
  async login(credentials: LoginDto): Promise<any> {
    try {
      const user = await this.userService.getByEmail(credentials.email)
      const valid = await bcrypt.compare(credentials.password, user.password)
      if (!valid) {
        throw new UnauthorizedException('Invalid credentials')
      }
      const token = this.jwtService.sign({ email: user.email })
      return { token }
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}

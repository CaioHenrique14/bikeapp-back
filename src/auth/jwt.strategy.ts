import { UserService } from './../user/user.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthPayload } from 'src/user/dto/user.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token'),
      secretOrKey: 'oCNOWEIBN0',
    })
  }

  async validate(payload: AuthPayload) {
    const { email } = payload
    const user = await this.userService.getByEmail(email)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}

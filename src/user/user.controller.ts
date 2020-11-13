import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { User } from './user.model'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  async add(@Body() user: UserDto): Promise<User> {
    const addedUser = await this.userService.add(user)
    return addedUser
  }

  @Get('')
  async getAll(): Promise<User[]> {
    const users = await this.userService.getAll()
    return users
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<User> {
    const user = await this.userService.get(id)
    return user
  }

  @Post('/delete')
  async delete(@Body() user: UserDto): Promise<void> {
    const deleteUser = await this.userService.delete(user)
    return 
  }

  @Put(':id')
  async put(@Param('id') id: string,@Body() user: UserDto): Promise<User> {
    console.log(user);
    const updateUser = await this.userService.update(id,user)
    return updateUser
  }
}

import { UserDto } from './dto/user.dto'
import { User } from './user.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async add(userData: UserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 12)
    const user = new this.userModel({
      ...userData,
      password: hashedPassword,
    })
    return await user.save()
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async get(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    return user
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async delete(userData: UserDto): Promise<void> {
    const user = await this.userModel.deleteOne(userData)
    return
  }
  async update(id:string,userData: UserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id,userData)
    return user
  }
}

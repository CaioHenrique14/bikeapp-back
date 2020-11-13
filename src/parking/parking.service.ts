import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ParkingDto } from './dto/parking.dto'
import { Parking } from './parking.model'

@Injectable()
export class ParkingService {
  constructor(
    @InjectModel('Parking') private readonly parkingModel: Model<Parking>
  ) {}

  async add(parkingData: ParkingDto): Promise<Parking> {
    const parking = new this.parkingModel({
      ...parkingData,
    })
    return await parking.save()
  }

  async getAll(): Promise<Parking[]> {
    const parkingArray = await this.parkingModel.find()
    return parkingArray
  }

  async get(id: string): Promise<Parking> {
    const parking = await this.parkingModel.findById(id)
    return parking
  }

  async delete(parkingData: ParkingDto): Promise<void> {
    const parking = await this.parkingModel.deleteOne(parkingData)
    return
  }
  async update(id:string,parkingData: ParkingDto): Promise<Parking> {
    const parking = await this.parkingModel.findByIdAndUpdate(id,parkingData)
    return parking
  }
}

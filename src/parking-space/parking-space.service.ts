import {
  OcupateParkingSpaceDto,
  ParkingSpaceDto,
} from './dto/parking-space.dto'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ParkingSpace } from './parking-space.model'

@Injectable()
export class ParkingSpaceService {
  constructor(
    @InjectModel('ParkingSpace')
    private readonly parkingSpacesModel: Model<ParkingSpace>
  ) {}

  async add(parkingSpacesData: ParkingSpaceDto): Promise<ParkingSpace> {
    const parkingSpaces = new this.parkingSpacesModel({
      ...parkingSpacesData,
      
    })
    return await parkingSpaces.save()
  }

  async getAll(): Promise<ParkingSpace[]> {
    const parkingSpacess = await this.parkingSpacesModel.find()
    return parkingSpacess
  }

  async get(id: string): Promise<ParkingSpace> {
    const parkingSpaces = await this.parkingSpacesModel.findById(id)
    return parkingSpaces
  }
  async ocupate(
    id: string,
    parkingSpace: OcupateParkingSpaceDto
  ): Promise<ParkingSpace> {
    const ocupated = await this.parkingSpacesModel.updateOne(
      {
        _id: id,
      },
      parkingSpace
    )
    return ocupated.n
  }
}

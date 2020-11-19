import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PlaceDto } from './dto/place.dto'
import { Place } from './place.model'

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel('Place') private readonly placeModel: Model<Place>
  ) {}

  async add(placeData: PlaceDto): Promise<Place> {
    const place = new this.placeModel({
      ...placeData,
    })
    return await place.save()
  }

  async getAll(): Promise<Place[]> {
    const places = await this.placeModel.find()
    return places
  }

  async get(id: string): Promise<Place> {
    const place = await this.placeModel.findById(id)
    return place
  }
}

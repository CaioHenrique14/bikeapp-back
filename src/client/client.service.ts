import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { ParkingDto } from './dto/parking.dto'
// import { Parking } from './parking.model'

@Injectable()
export class ClientService {
  constructor(
    // @InjectModel('Client') private readonly parkingModel: Model<Client>
  ) {}


}

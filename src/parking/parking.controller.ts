import { Parking } from './parking.model'
import { ParkingDto } from './dto/parking.dto'
import { ParkingService } from './parking.service'
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}
  @Post('')
  async add(@Body() parking: ParkingDto): Promise<Parking> {
    const addedParking = await this.parkingService.add(parking)
    return addedParking
  }
  @Get('')
  async getAll(): Promise<Parking[]> {
    const parkingArray = await this.parkingService.getAll()
    return parkingArray
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Parking> {
    const parking = await this.parkingService.get(id)
    return parking
  }

  @Post('/delete')
  async delete(@Body() parking: ParkingDto): Promise<void> {
    const deleteParking = await this.parkingService.delete(parking)
    return 
  }

  @Put(':id')
  async put(@Param('id') id: string,@Body() parking: ParkingDto): Promise<Parking> {
    const updateParking = await this.parkingService.update(id,parking)
    return updateParking
  }
}

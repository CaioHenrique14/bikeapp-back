import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import {
  OcupateParkingSpaceDto,
  ParkingSpaceDto,
} from './dto/parking-space.dto'
import { ParkingSpace } from './parking-space.model'
import { ParkingSpaceService } from './parking-space.service'

@Controller('parking-space')
export class ParkingSpaceController {
  constructor(private parkingSpaceService: ParkingSpaceService) {}
  @Post('')
  async add(@Body() parkingSpace: ParkingSpaceDto): Promise<ParkingSpace> {
    const addedParkingSpace = await this.parkingSpaceService.add(parkingSpace)
    return addedParkingSpace
  }
  @Get('')
  async getAll(): Promise<ParkingSpace[]> {
    const parkingSpaces = await this.parkingSpaceService.getAll()
    return parkingSpaces
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ParkingSpace> {
    const parkingSpace = await this.parkingSpaceService.get(id)
    return parkingSpace
  }
  @Patch('/ocupate/:id')
  async ocupate(
    @Param('id') id: string,
    @Body() parkingSpace: OcupateParkingSpaceDto
  ): Promise<ParkingSpace> {
    const ocupated = await this.parkingSpaceService.ocupate(id, parkingSpace)
    return ocupated
  }
}

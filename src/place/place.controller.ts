import { PlaceDto } from './dto/place.dto'
import { PlaceService } from './place.service'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Place } from './place.model'

@Controller('place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Post('')
  async add(@Body() place: PlaceDto): Promise<Place> {
    const addedPlace = await this.placeService.add(place)
    return addedPlace
  }
  @Get('')
  async getAll(): Promise<Place[]> {
    const places = await this.placeService.getAll()
    return places
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Place> {
    const place = await this.placeService.get(id)
    return place
  }
}

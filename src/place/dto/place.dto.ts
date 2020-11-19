import { IsNotEmpty, IsNumber } from 'class-validator'

export class PlaceDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  @IsNumber()
  latitude: number

  @IsNotEmpty()
  @IsNumber()
  longitude: number
}

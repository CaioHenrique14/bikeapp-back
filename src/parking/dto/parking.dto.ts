import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ParkingDto {
  @IsNotEmpty()
  @IsNumber()
  idPlace: number

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string
}

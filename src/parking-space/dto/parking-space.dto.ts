import { IsNotEmpty } from 'class-validator'

export class ParkingSpaceDto {
  @IsNotEmpty()
  idPlace: number

  @IsNotEmpty()
  available: boolean
}

export class OcupateParkingSpaceDto {
  @IsNotEmpty()
  available: boolean
}

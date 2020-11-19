import { ParkingSpaceService } from './parking-space.service'
import { ParkingSpaceController } from './parking-space.controller'
import { ParkingSpaceSchema } from './parking-space.model'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'ParkingSpace', schema: ParkingSpaceSchema },
    ]),
  ],
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService],
})
export class ParkingSpaceModule {}

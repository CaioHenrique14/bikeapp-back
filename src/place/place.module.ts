import { PlaceSchema } from './place.model'
import { PlaceService } from './place.service'
import { PlaceController } from './place.controller'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
  ],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}

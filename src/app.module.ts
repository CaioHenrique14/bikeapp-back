import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { PlaceModule } from './place/place.module'
import { ParkingModule } from './parking/parking.module'
import { ParkingSpaceModule } from './parking-space/parking-space.module'
import { AuthModule } from './auth/auth.module'
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bolachadomar:1XhN7t3fi6daYyp3@parkingbike.gbdff.gcp.mongodb.net/bike-parking?retryWrites=true&w=majority'
    ),
    UserModule,
    PlaceModule,
    ParkingModule,
    ParkingSpaceModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

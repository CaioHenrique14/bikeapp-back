import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { PlaceModule } from './place/place.module'
import { ParkingModule } from './parking/parking.module'
import { ParkingSpaceModule } from './parking-space/parking-space.module'
import { AuthModule } from './auth/auth.module'
import { ClientModule } from './client/client.module';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { FcmModule } from 'nestjs-fcm';
import * as path from 'path';
import { ParkingSpaceService } from './parking-space/parking-space.service'
import { ParkingSpaceSchema } from './parking-space/parking-space.model'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bolachadomar:1XhN7t3fi6daYyp3@parkingbike.gbdff.gcp.mongodb.net/bike-parking?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([
      { name: 'ParkingSpace', schema: ParkingSpaceSchema },
    ]),
    UserModule,
    PlaceModule,
    ParkingModule,
    ParkingSpaceModule,
    AuthModule,
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.MQTT,
        options: {
          host: '127.0.0.1',
          port: 1883,
          protocol: 'tcp'
      }
      },
    ]),
    FcmModule.forRoot({
      firebaseSpecsPath: path.join(__dirname, '../bikeapp-e5593-firebase-adminsdk-lbvzc-130aed179b.json'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService,ParkingSpaceService],
})
export class AppModule {}

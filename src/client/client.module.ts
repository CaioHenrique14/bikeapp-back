import { ClientService } from './client.service'
import { ClientController } from './client.controller'
// import { ClientSchema } from './client.model'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
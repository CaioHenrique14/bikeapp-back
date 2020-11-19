import { Bind, Controller, Get } from '@nestjs/common'
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { FcmService } from 'nestjs-fcm';
import { AppService } from './app.service'
import { ParkingSpaceService } from './parking-space/parking-space.service';
import {
  OcupateParkingSpaceDto,
  ParkingSpaceDto,
} from './parking-space/dto/parking-space.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private fcmService: FcmService,private parkingSpaceService: ParkingSpaceService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
  

  @MessagePattern('vaga') 
  ackMessageTestData(data:unknown) {
      let msg = data.toString();
      let msgArray = msg.split("/");
      console.log(msgArray);      
      this.parkingSpaceService.ocupate(msgArray[0],{available:(msgArray[1]=='true')})
      this.fcmService.sendNotification([
        'essAh3tlbEQ:APA91bErTLRhIlrc5LJpUoVQpWUz73kxHXwp0L1UyFus-s1bf6EWN-Jl5rvVS2KWxbQAhgw9j2Lk5Yy8PE8JMZuLuEIr6mY2QjAxdwbVy16crgdJIAmbjk-mIs2_faomgd-0ggUgNnXk',
        ],
        {data:{data:data.toString()},notification:{mensagem:data.toString()}},
        true,
      );
      return 'Message Received';
  }
  
}

// import { Client } from './client.model'
// import { ParkingDto } from './dto/parking.dto'
import {  ClientService } from './client.service'
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

@Controller('parking')
export class ClientController {
  constructor(private readonly clientService:  ClientService) {}


}

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appMicroservice = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.MQTT,
    options: {
        host: '127.0.0.1',
        port: 1883,
        protocol: 'tcp'
    }
});
  
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  appMicroservice.listen(() => console.log('Microservice is listening'));
  await app.listen(3000)
}
bootstrap()

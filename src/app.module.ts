import * as path from 'path'
import * as dotenv from 'dotenv'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/events.entity';
import { EventsModule } from './events/events.module';
import { AppJapanService } from './add.japan.service';
import { AppDummy } from './app.dummy';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_HOST,
      port: Number(MYSQL_PORT),
      username: MYSQL_USERNAME,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      entities: [Event],
      synchronize: true,
    }),
    EventsModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppJapanService
    },
    {
      provide: 'APP_NAME',
      useValue: 'Nest Events Backend'
    },
    {
      provide: 'MESSAGE',
      inject: [AppDummy],
      useFactory: app => `${app.dummy()} Factory!`
    },
    AppDummy
  ],
})
export class AppModule {}

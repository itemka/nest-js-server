import * as path from 'path'
import * as dotenv from 'dotenv'
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsController } from './events.controller';
import { AppService } from './app.service';

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
    })
  ],
  controllers: [
    AppController,
    EventsController,
  ],
  providers: [AppService],
})
export class AppModule {}

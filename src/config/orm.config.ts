import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Event } from '../events/entities/events.entity';
import { Attendee } from '../events/entities/attendee.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [
    Event,
    Attendee,
  ],
  synchronize: true,
}));

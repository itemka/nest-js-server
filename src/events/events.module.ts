import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/events.entity';
import { EventsController } from './events.controller';
import { Attendee } from './entities/attendee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Event,
      Attendee
    ])
  ],
  controllers: [EventsController],
})
export class EventsModule {}

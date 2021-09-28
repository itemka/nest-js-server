import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsController } from './events.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    EventsController,
  ],
  providers: [AppService],
})
export class AppModule {}

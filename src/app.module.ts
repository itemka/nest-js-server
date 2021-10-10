import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/events.entity';
import { EventsModule } from './events/events.module';
import { AppJapanService } from './add.japan.service';
import { AppDummy } from './app.dummy';
import ormConfig from './config/orm.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
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

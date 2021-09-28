import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
} from "@nestjs/common"
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Event } from "./events.entity"

@Controller({ path: '/events' })
export class EventsController {
  private events: Event[] = []

  @Get()
  findAll() {
    return this.events
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.events.find(event => event.id === parseInt(id))
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    }

    this.events.push(event)

    return event
  }

  @Patch((':id'))
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    const idx = this.events.findIndex(event => event.id === id)
    this.events[idx] = {
      ...this.events[idx],
      ...input,
      when: input.when
        ? new Date(input.when)
        : this.events[idx].when,
    }

    return this.events[idx]
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    this.events = this.events.filter(event => event.id !== parseInt(id))
  }
}

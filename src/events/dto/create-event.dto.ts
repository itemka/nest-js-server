import {
  IsDateString,
  IsString,
  Length
} from 'class-validator';

const fieldLength: [number, number] = [5, 255]

export class CreateEventDto {
  @IsString()
  @Length(...fieldLength, {
    message: 'The name length is wrong. It needs to be more the 5 and less then 255'
  })
  name: string;

  @Length(...fieldLength)
  description: string;

  @IsDateString()
  when: string;

  // for example: @Length(10, 20, { groups: ['update'] })
  @Length(...fieldLength)
  address: string;
}
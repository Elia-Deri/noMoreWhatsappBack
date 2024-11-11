import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

import { Contact } from 'src/contacts/entities/contact.entity';

export class CreateTodoDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date) // Ensures that the value is transformed into a Date instance
  dead_line?: Date;

  @IsString()
  location: string;

  @IsObject()
  contact: Contact;

  @IsOptional()
  @IsBoolean()
  done?: boolean; // Set as optional if you want to allow the default value
}

import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dead_line?: Date;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsString()
  @Length(9, 10)
  contact_number: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;
}

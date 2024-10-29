import { IsString, Length } from 'class-validator';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Contact {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  @Length(9, 10)
  phone_number: string;
}

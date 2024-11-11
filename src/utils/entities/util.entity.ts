import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Util {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  data: any;
}

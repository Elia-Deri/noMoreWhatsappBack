import { IsBoolean, IsDate, IsObject, IsString } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, ObjectIdColumn } from 'typeorm';

import { Contact } from 'src/contacts/entities/contact.entity';

@Entity()
export class Todo {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  name: string;

  @Column({ nullable: true })
  @IsString()
  description?: string;

  @Column({ nullable: true })
  @IsDate()
  dead_line?: Date;

  @Column()
  @IsString()
  location: string;

  @Column()
  @IsObject()
  contact: Contact;

  @Column({ default: false })
  @IsBoolean()
  done: boolean;
}

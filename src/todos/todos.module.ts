import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { ContactsService } from 'src/contacts/contacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService, ContactsService],
})
export class TodosModule {}

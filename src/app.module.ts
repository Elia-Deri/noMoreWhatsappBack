import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { Todo } from './todos/entities/todo.entity';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      database: 'loopy',
      logging: true,
      synchronize: true,
      ssl: true,
      useUnifiedTopology: true,
      entities: [Todo, Contact],
      autoLoadEntities: true,
    }),
    TodosModule,
    ContactsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

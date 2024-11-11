import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { UtilsController } from './utils.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Util } from './entities/util.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Util])],
  controllers: [UtilsController],
  providers: [UtilsService],
})
export class UtilsModule {}

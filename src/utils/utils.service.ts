import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUtilDto } from './dto/create-util.dto';
import { UpdateUtilDto } from './dto/update-util.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Util } from './entities/util.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UtilsService {
  constructor(
    @InjectRepository(Util)
    private utilsRepo: Repository<Util>,
  ) {}

  create(createUtil: CreateUtilDto) {
    const newUtil = this.utilsRepo.create({
      data: createUtil.data,
      name: createUtil.name,
    });

    if (!newUtil) {
      throw new BadRequestException('לא הצלחתי ליצור מידע, באסה :(');
    }

    this.utilsRepo.save(newUtil);
    return 'הופלה יצרת כלי שתשתמש בו רק פעם אחת, אווירה 🦍';
  }

  findOne(utilName: string) {
    return this.utilsRepo.findOne({ where: { name: utilName } });
  }
}

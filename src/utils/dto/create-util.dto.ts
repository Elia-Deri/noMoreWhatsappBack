import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUtilDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  data: any;
}

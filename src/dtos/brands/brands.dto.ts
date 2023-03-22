import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class updateBrandDto extends PartialType(createBrandDto) {}

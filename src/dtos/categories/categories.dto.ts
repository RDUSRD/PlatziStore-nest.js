import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createCategoriesDto {
  @IsString()
  @IsNotEmpty()
  readonly category_name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly picture: string;
}
export class updateCategoriesDto extends PartialType(createCategoriesDto) {}

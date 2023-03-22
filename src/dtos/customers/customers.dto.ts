import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
export class updateCustomerDto extends PartialType(createCustomerDto) {}

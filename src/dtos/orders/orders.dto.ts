import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsDate,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createOrderDto {
  @IsString()
  @IsNotEmpty()
  orderNumber: string;

  @IsDate()
  @IsNotEmpty()
  orderDate: Date;

  @IsDate()
  @IsNotEmpty()
  requiredDate: Date;

  @IsDate()
  @IsNotEmpty()
  shippedDate: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  comments: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  customerNumber: number;
}

export class updateOrderDto extends PartialType(createOrderDto) {}

import { IsString, IsNotEmpty, IsEmail, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @IsDate()
  @IsNotEmpty()
  readonly created_at: Date;

  @IsDate()
  @IsNotEmpty()
  readonly updated_at: Date;
}

export class updateUserDto extends PartialType(createUserDto) {}

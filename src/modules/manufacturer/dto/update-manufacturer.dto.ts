import { PartialType } from '@nestjs/mapped-types';
import { CreateManufacturerDto } from './create-manufacturer.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {
  @IsOptional()
  @IsString()
  @MaxLength(300)
  description?: string;
}

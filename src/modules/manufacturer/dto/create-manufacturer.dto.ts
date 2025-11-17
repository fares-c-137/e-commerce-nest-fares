import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateManufacturerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;
}

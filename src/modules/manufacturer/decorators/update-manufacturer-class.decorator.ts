import { applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UpdateManufacturerDto } from '../dto/update-manufacturer.dto';

export function UpdateManufacturerClassDecorator() {
  return applyDecorators(ApiBody({ type: UpdateManufacturerDto }));
}

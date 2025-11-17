import { BaseEntity } from '../../common/entities/base.entity';

export class Manufacturer extends BaseEntity {
  name!: string;
  description?: string;
  logoUrl?: string;
}

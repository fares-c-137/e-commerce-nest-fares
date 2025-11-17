import { Injectable } from '@nestjs/common';
import { ManufacturerRepository } from './manufacturer.repository';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Injectable()
export class ManufacturerService {
  constructor(private readonly repo: ManufacturerRepository) {}

  create(dto: CreateManufacturerDto) {
    return this.repo.create({ name: dto.name, description: dto.description });
  }

  findAll() {
    return this.repo.findAll(false);
  }

  findAllArchived() {
    return this.repo.findArchived();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, dto: UpdateManufacturerDto) {
    return this.repo.update(id, { ...dto });
  }

  updateAttachment(id: string, logoUrl: string) {
    return this.repo.update(id, { logoUrl });
  }

  softDelete(id: string) {
    return this.repo.softDelete(id);
  }

  archive(id: string) {
    return this.repo.archive(id);
  }

  hardDelete(id: string) {
    return this.repo.hardDelete(id);
  }
}

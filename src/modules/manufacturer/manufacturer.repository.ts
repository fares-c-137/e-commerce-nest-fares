import { Injectable, NotFoundException } from '@nestjs/common';
import { Manufacturer } from './entities/manufacturer.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ManufacturerRepository {
  private storage = new Map<string, Manufacturer>();

  create(partial: Omit<Manufacturer, 'id' | 'createdAt' | 'updatedAt'>): Manufacturer {
    const now = new Date();
    const manufacturer: Manufacturer = { ...partial, id: uuid(), createdAt: now, updatedAt: now, isDeleted: false, isArchived: false, deletedAt: null as any };
    this.storage.set(manufacturer.id, manufacturer);
    return manufacturer;
  }

  findAll(includeArchived = false): Manufacturer[] {
    return [...this.storage.values()].filter(m => includeArchived ? true : !m.isArchived && !m.isDeleted);
  }

  findArchived(): Manufacturer[] {
    return [...this.storage.values()].filter(m => m.isArchived && !m.isDeleted);
  }

  findOne(id: string): Manufacturer {
    const m = this.storage.get(id);
    if (!m) throw new NotFoundException('Manufacturer not found');
    return m;
  }

  update(id: string, patch: Partial<Manufacturer>): Manufacturer {
    const m = this.findOne(id);
    const updated = { ...m, ...patch, updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  softDelete(id: string): Manufacturer {
    const m = this.findOne(id);
    const updated = { ...m, isDeleted: true, deletedAt: new Date(), updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  archive(id: string): Manufacturer {
    const m = this.findOne(id);
    const updated = { ...m, isArchived: true, updatedAt: new Date() };
    this.storage.set(id, updated);
    return updated;
  }

  hardDelete(id: string): void {
    if (!this.storage.delete(id)) throw new NotFoundException('Manufacturer not found');
  }
}

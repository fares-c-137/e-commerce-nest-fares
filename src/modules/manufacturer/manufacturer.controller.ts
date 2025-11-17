import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { localImageMulterOptions } from '../../media/multer.routes.options';
import { ImageParseFilePipe } from '../../media/multer.parse-file.pipe';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly service: ManufacturerService) {}

  @Post()
  create(@Body() dto: CreateManufacturerDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('archived')
  findAllArchived() {
    return this.service.findAllArchived();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateManufacturerDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/attachment')
  @UseInterceptors(FileInterceptor('file', localImageMulterOptions))
  updateAttachment(@Param('id') id: string, @UploadedFile(new ImageParseFilePipe()) file: Express.Multer.File) {
    const logoUrl = file.path || (file as any).location;
    return this.service.updateAttachment(id, logoUrl);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.service.archive(id);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.service.softDelete(id);
  }

  @Delete(':id/hard')
  hardDelete(@Param('id') id: string) {
    return this.service.hardDelete(id);
  }
}

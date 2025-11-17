import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
constructor(private readonly groupService:GroupService){}    
    
@Get()
groups(){
    const groups = this.groupService.groups()
    return {message:"Done" , data: {groups}}
}
}

/* Added: Attachment & archive/soft/hard delete endpoints */
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile, Patch, Delete, Param } from '@nestjs/common';
import { localImageMulterOptions } from '../../media/multer.routes.options';
import { ImageParseFilePipe } from '../../media/multer.parse-file.pipe';

// NOTE: The below assumes there are methods on the service with the same names.

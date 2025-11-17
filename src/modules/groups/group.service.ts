import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
    groups(){
        return [{id:1 , name: 'fashon'}]
    }
}

/* Added: Service stubs for attachment/update & soft/hard delete for Group */
export interface GroupAttachment { imageUrl?: string }

export function _noop<T>(v: T): T { return v }


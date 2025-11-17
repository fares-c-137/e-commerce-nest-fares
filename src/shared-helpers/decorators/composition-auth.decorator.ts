import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';

export function Authenticated() {
  return applyDecorators(UseGuards(AuthGuard));
}

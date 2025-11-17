import { Global, Module } from '@nestjs/common';
import { SessionTokenService } from './session-token.service';

@Global()
@Module({
  providers: [SessionTokenService],
  exports: [SessionTokenService],
})
export class SessionTokenModule {}

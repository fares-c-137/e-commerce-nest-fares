import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';

import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [ManufacturerModule, MediaModule, DatabaseModule, AccountsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
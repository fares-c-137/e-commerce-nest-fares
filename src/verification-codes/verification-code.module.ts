import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Otp, OtpSchema } from './schemas/otp.schema';
import './schemas/otp.hooks';
import { VerificationCodeRepository } from './verification-code.repository';
import { VerificationCodeService } from './verification-code.service';
import { VerificationCodeController } from './verification-code.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Otp.name, schema: OtpSchema }])],
  providers: [VerificationCodeRepository, VerificationCodeService],
  controllers: [VerificationCodeController],
  exports: [VerificationCodeService, VerificationCodeRepository],
})
export class VerificationCodeModule {}

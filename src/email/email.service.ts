import { Injectable, Logger } from '@nestjs/common';
import { SendEmailOptions } from './interfaces/send-email-options.interface';


@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  async send(options: SendEmailOptions): Promise<void> {
   
    this.logger.log(`Sending mail => to: ${options.to}, subject: ${options.subject}`);
  
  }
}

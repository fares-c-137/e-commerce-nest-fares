import { OtpSchema } from './otp.schema';
import { HashUtils } from '../../helpers/hash.util';

OtpSchema.pre('save', async function (next) {
  const doc: any = this;
  if (doc.isModified('code') && doc.code) {
    doc.code = await HashUtils.hash(doc.code);
  }
  next();
});

export default OtpSchema;

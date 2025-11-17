import { UserSchema } from './user.schema';
import { HashUtils } from '../../helpers/hash.util';

UserSchema.pre('save', async function (next) {
  const doc: any = this;
  if (doc.isModified('password') && doc.password) {
    doc.password = await HashUtils.hash(doc.password);
  }
  next();
});

export default UserSchema;
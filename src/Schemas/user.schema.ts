import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Subscription } from '../subscription.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' })
  subscription : Subscription;


}

export const CatSchema = SchemaFactory.createForClass(User);
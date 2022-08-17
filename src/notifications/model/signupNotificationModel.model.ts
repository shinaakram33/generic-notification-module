import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({
  timestamps: true
})
export class SignupNotificationModel {

  @Prop()
  _id: String;

  @Prop({ type: String })
  message: String;

  @Prop({ required: true, type: String})
  userId: String;

  @Prop()
  Date: String;

  @Prop({ default: false })
  isRead: boolean;

}

export type SignupNotificationDocument = SignupNotificationModel & Document;
export const SignupNotificationSchema = SchemaFactory.createForClass(SignupNotificationModel);

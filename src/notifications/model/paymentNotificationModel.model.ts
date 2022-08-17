import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({
  timestamps: true
})
export class PaymentNotificationModel {

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

export type PaymentNotificationDocument = PaymentNotificationModel & Document;
export const PaymentNotificationSchema = SchemaFactory.createForClass(PaymentNotificationModel);

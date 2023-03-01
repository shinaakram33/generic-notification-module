import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({
  timestamps: true
})
export class NotificationModel {
  
  @Prop()
  message: string;

  @Prop({ required: true})
  userId: string;

}

export type NotificationDocument = NotificationModel & Document;
export const NotificationSchema = SchemaFactory.createForClass(NotificationModel);

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thealitahir:punjabf13@cluster0.qbtub.azure.mongodb.net/generic-notification-module'),
    NotificationModule,
  ]
})
export class AppModule {}

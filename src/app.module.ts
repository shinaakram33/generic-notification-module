import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tdcserviceapp:Emptdc123@cluster0.lnhseou.mongodb.net/?retryWrites=true&w=majority'),
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

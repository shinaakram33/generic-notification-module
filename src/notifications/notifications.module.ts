import { Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { OneSignalModule } from "onesignal-api-client-nest";
import { NotificationModel, NotificationSchema } from "./model/notificationModel.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NotificationModel.name, schema: NotificationSchema },
    ]),
    OneSignalModule.forRoot({
      appId: "5a99b3de-ce37-49ca-8b15-b0608055060e",
      restApiKey: "NDNiNjgwMDEtZjQ5Ni00OTdhLThkYTEtZDQ1OGQxMWI1N2Q1",
    }),
  ],
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationModule {}

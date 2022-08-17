import { Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { PaymentNotificationSchema, PaymentNotificationModel } from "./model/paymentNotificationModel.model";
import { MongooseModule } from "@nestjs/mongoose";
import { OneSignalModule } from "onesignal-api-client-nest";
import { SignupNotificationModel, SignupNotificationSchema } from "./model/signupNotificationModel.model";
import { PlaceOrderNotificationModel, PlaceorderNotificationSchema } from "./model/placeOrderNotificationModel.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaymentNotificationModel.name, schema: PaymentNotificationSchema },
    ]),
    MongooseModule.forFeature([
      { name: SignupNotificationModel.name, schema: SignupNotificationSchema },
    ]),
    MongooseModule.forFeature([
      { name: PlaceOrderNotificationModel.name, schema: PlaceorderNotificationSchema },
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

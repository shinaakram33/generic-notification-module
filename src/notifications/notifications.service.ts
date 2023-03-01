import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, {Model, Schema as MongooseSchema} from 'mongoose';
import { OneSignalService } from 'onesignal-api-client-nest';
import {User} from './user.mock';
import { UserInfo } from 'os';
import { NotificationModel } from './model/notificationModel.model';

@Injectable()
export class NotificationsService {
    private user= User;
    constructor(
        @InjectModel(NotificationModel.name)
        private notificationModel: Model<NotificationModel>,
        private readonly oneSignalService: OneSignalService,
    ){}

    async sendNotification(message:string, userId: string){
        try{
            const user = this.user.find((user)=> user.id === userId) ;
            if(user){
                const sendNotification = await this.oneSignalService.createNotification({
                    contents: { en: message},
                    include_player_ids: user.deviceId
                })
                const notification = await this.notificationModel.create(message, userId);
                console.log(notification);
                return notification;
            }else{
                return "User Not Found";
            }
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }
}
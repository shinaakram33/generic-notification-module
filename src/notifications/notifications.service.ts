import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentNotificationModel, PaymentNotificationDocument } from './model/paymentNotificationModel.model';
import mongoose, {Model, Schema as MongooseSchema} from 'mongoose';
import { OneSignalService } from 'onesignal-api-client-nest';
import { PaymentNotificationDto } from './dto/PaymentNotificationDto.dto';
import {User} from './user.mock';
import { SignupNotificationDto } from './dto/signupNotificationDto.dto';
import { PlaceOrderNotificationDto } from './dto/PlaceOrderNotificationDto.dto';
import { SignupNotificationDocument, SignupNotificationModel } from './model/signupNotificationModel.model';
import { PlaceOrderNotificationDocument, PlaceOrderNotificationModel } from './model/placeOrderNotificationModel.model';

@Injectable()
export class NotificationsService {
    private user= User;
    constructor(
        @InjectModel(PaymentNotificationModel.name)
        private paymentNotificationModel: Model<PaymentNotificationDocument>,
        @InjectModel(SignupNotificationModel.name)
        private signupNotificationModel: Model<SignupNotificationDocument>,
        @InjectModel(PlaceOrderNotificationModel.name)
        private placeOrderNotificationModel: Model<PlaceOrderNotificationDocument>,
        private readonly oneSignalService: OneSignalService,
    ){}

    async paymentNotification(paymentNotificationDto: PaymentNotificationDto){
        try{
            const userId = this.user.find((user)=> user.id === paymentNotificationDto.userId) ;
            const sendNotification = await this.oneSignalService.createNotification({
                contents: { en: paymentNotificationDto.message},
                include_player_ids: userId.deviceId
            })
            const notification = await this.paymentNotificationModel.create(paymentNotificationDto);
            return notification;
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }

    async signupNotification(signupNotificationDto: SignupNotificationDto){
        try{
            const userId = this.user.find((user)=> user.id === signupNotificationDto.userId) ;
            const sendNotification = await this.oneSignalService.createNotification({
                contents: { en: signupNotificationDto.message},
                include_player_ids: userId.deviceId
            })
            const notification = await this.signupNotificationModel.create(signupNotificationDto);
            return notification;
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }

    async placeOrderNotification(placeOrderNotificationDto: PlaceOrderNotificationDto){
        try{
            const userId = this.user.find((user)=> user.id === placeOrderNotificationDto.userId) ;
            const sendNotification = await this.oneSignalService.createNotification({
                contents: { en: placeOrderNotificationDto.message},
                include_player_ids: userId.deviceId
            })
            const notification = await this.placeOrderNotificationModel.create(placeOrderNotificationDto);
            return notification;
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }
}
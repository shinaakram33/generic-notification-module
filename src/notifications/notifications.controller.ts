import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentNotificationDto } from './dto/PaymentNotificationDto.dto';
import { PlaceOrderNotificationDto } from './dto/PlaceOrderNotificationDto.dto';
import { SignupNotificationDto } from './dto/signupNotificationDto.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {

    constructor(private notificationService: NotificationsService){}

    //@ApiBearerAuth()
    @Post('payment')
    //@UseGuards(AuthGuard("jwt"))
    paymentNotication(@Body() paymentNoticationDto: PaymentNotificationDto): Promise<any>{
        return this.notificationService.paymentNotification(paymentNoticationDto);
    }

    @Post('signup')
    signupNotification(@Body() signupNotificationDto: SignupNotificationDto): Promise<any>{
        return this.notificationService.signupNotification(signupNotificationDto);
    }

    @Post('placeorder')
    placeOrderNotification(@Body() placeOrderNotificationDto: PlaceOrderNotificationDto): Promise<any>{
        return this.notificationService.placeOrderNotification(placeOrderNotificationDto);
    }

}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {

    constructor(private notificationService: NotificationsService){}

    @Post('testnotification')
    testNotification():Promise<any>{
        return this.notificationService.sendNotification("Hello! You have signed up successfully." , "1");
    }

}

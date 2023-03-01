import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class PaymentNotificationDto{

@IsNotEmpty()
@IsString()
@ApiProperty()
message: string;

@IsNotEmpty()
//@IsUUID("4")
@ApiProperty()
userId: string;

}

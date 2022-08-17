import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class PaymentNotificationDto{
@IsNotEmpty()
@ApiProperty()
//@IsUUID('4')
_id: string;

@IsNotEmpty()
@IsString()
@ApiProperty({
    description: "You have made Payment successfully."
  })
message: string;

@IsNotEmpty()
//@IsUUID("4")
@ApiProperty()
userId: string;

@IsNotEmpty()
@ApiProperty()
Date: String;

@IsNotEmpty()
@ApiProperty()
isRead: boolean;
}

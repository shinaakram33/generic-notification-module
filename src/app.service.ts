import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  
  getHello(): string {
    return `API is running on PORT: ${process.env.PORT}`;
  }
}
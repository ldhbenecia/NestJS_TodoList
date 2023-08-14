import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'get Hello';
  }

  postHello(): string {
    return 'post Hello';
  }

  putHello(): string {
    return 'put Hello';
  }

  deleteHello(): string {
    return 'delete Hello';
  }
}

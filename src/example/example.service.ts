import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor() { }

  async getHello(){
    return 'Hello World';
  }

  async getBye(){
    return 'Bye';
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Cliente } from './interface/cliente';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('criar-cliente')
  async criarCliente(@Payload() dto: Cliente) {
    return this.appService.post(dto);
  }
}

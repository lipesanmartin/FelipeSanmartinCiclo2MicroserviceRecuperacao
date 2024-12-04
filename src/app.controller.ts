import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Cliente } from './interface/cliente';
import { Seguro } from './interface/seguro';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('criar-cliente')
  async criarCliente(@Payload() dto: Cliente) {
    return this.appService.postCliente(dto);
  }

  @EventPattern('criar-seguro')
  async criarSeguro(@Payload() dto: Seguro) {
    return this.appService.postSeguro(dto);
  }


}

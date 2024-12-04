import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cliente } from './interface/cliente';
import { Seguro } from './interface/seguro';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postCliente(dto: Cliente) {
     return await this.prisma.cliente.create({
      data: dto
    })
  }

  async postSeguro(dto: Seguro) {
    return await this.prisma.seguro.create({
     data: dto
   })
 }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cliente } from './interface/cliente';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async post(dto: Cliente) {
     return await this.prisma.cliente.create({
      data: dto
    })
  }
}

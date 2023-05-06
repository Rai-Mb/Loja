import { Module } from '@nestjs/common';
import { FuncionarioController } from './controller/funcionario-controller';

@Module({
  imports: [],
  controllers: [FuncionarioController],
  providers: [],
})
export class AppModule {}

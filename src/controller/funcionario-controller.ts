/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { FuncionarioRepository } from 'src/repository/funcionario-repository';

@Controller('/funcionario')
export class FuncionarioController {

  private funcionarioRepository = new FuncionarioRepository

  @Post('/cadastro')
  async criarFuncionario(@Body() funcionario) {
    try {
      this.funcionarioRepository.salvar(funcionario);
      return funcionario;
    } catch (e) {
      return e;
    }
  }
}

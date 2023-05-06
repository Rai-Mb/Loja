/* eslint-disable prettier/prettier */

export class FuncionarioRepository {
    private funcionarios = [];
  
    async salvar(funcionario: string) {
      this.funcionarios.push(funcionario);
    }
}
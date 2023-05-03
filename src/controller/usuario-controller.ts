/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  
    private usuarioRepository = new UsuarioRepository;

    @Post('/cadastrar')
    async cadastroUsuario(@Body() dadosDoUsuario ) {
      this.usuarioRepository.salvar(dadosDoUsuario); 
      return dadosDoUsuario;
  };

  @Get('/lista')
  async listaDeUsuarios() {
    return this.usuarioRepository.listar();
  };
}
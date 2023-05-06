/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export const funcionario = new mongoose.Schema({
    nome: String,   
    funcao: String,
});

import { Id } from "../interfaces/id";

export class Turma implements Id{
  public id: string;
  public nome: string;

   constructor(
      id: string,
      nome: string
      ){
      this.id = id;
      this.nome = nome;
   }
}
import { Id } from "../interfaces/id";

export class Turma implements Id{
  public id: string;
  public nome: string;
  private docentes: string;
  private estudantes: string;
  private modulo?:number = 0; 

   constructor(
      id: string,
      nome: string,
      docentes: string,
      estudantes: string,
      modulo:number
      ){
      this.id = id;
      this.nome = nome;
      this.docentes = docentes;
      this.estudantes = estudantes;
      this.modulo = modulo;
   }
}
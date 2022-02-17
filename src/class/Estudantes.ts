import { Turma } from "./Turma";
import { Id } from "../interfaces/id"


// type date{
//    data_nasc: Date
// }


export class Estudantes implements Id{
   public id: string;  
   public nome: string;
   private email: string;
   private data_nasc: string;
   private turma_id: string;
   private hobbies: string;

   constructor(
      id: string,
      nome: string,
      email: string,
      data_nasc: string,
      turma_id: string,
      hobbies: string
      ){
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.data_nasc = data_nasc;
      this.turma_id = turma_id;
      this.hobbies = hobbies;
   }
}
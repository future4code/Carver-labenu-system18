import { User } from "./User"; 


export class Estudante extends User{
   constructor(
      id: string,
      nome: string,
      email: string,
      data_nascimento: string,
      turma_id:string,
      private hobbies: string
      ){
       super(id, nome, email, data_nascimento,turma_id)
       this.hobbies = hobbies
   }

   public getEstudanteInfos(){
      return{
         id: this.id,
         nome: this.nome,
         email: this.email,
         data_nascimento: this.data_nascimento,
         turma_id: this.turma_id,
         hobbies: this.hobbies
      }
   }

   public getEstudanteHobbie(){
      return this.hobbies
   }
}
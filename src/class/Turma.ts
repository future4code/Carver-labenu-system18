
export class Turma{
  private id: string;
  private nome: string;
  private modulo?:number; 

   constructor(
      id: string,
      nome: string,
      modulo:number = 0
      ){
      this.id = id;
      this.nome = nome;
      this.modulo = modulo;
   }
      
   public pegaInfoTurma(){
      return {
      id: this.id,
      nome:this.nome,
      modulo:this.modulo
      }
   }



}


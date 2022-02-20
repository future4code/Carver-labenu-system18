import { stringify } from "querystring";
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
       super(id, nome, email, data_nascimento,turma_id);
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
}



// export default async function criarEstudantes(
//    req:Request,
//    res:Response
//    ){
//    try {
//       const{nome, email, data_nasc} = req.body;

//       const turmaId = Number(req.body.turma_id)
   
//    if(
//       !req.body.nome ||
//       !req.body.email ||
//       !req.body.data_nasc ||
//       !turmaId
//       ){
//         res
//         .status(400)
//         .send({
//            message: "'Preencha' os campos 'nome', 'email', 'data_nasc' e 'turma_id "
//          }) 
//          return 
//       }

//       // await connection.insert({
//       //    nome,
//       //    email,
//       //    data_nasc,
//       //    turma_id: turmaId
//       // }).into('estudante')

//       res
//       .status(200)
//       .send({
//          message:"Estudante cadastrado com sucesso!"
//       })
      
//    }catch(error:any){
//       res
//       .status(400)
//       .send({
//          message: error.message
//          })
//    }
// }






// type date{
//    data_nasc: Date
// }


// export class Estudantes implements Id{
//    public id: string;  
//    public nome: string;
//    private email: string;
//    private data_nasc: string;
//    private turma_id: string;
//    private hobbies: string;

//    constructor(
//       id: string,
//       nome: string,
//       email: string,
//       data_nasc: string,
//       turma_id: string,
//       hobbies: string
//       ){
//       this.id = id;
//       this.nome = nome;
//       this.email = email;
//       this.data_nasc = data_nasc;
//       this.turma_id = turma_id;
//       this.hobbies = hobbies;
//    }
// }
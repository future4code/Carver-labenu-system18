import { Request, Response } from "express"
import { connection } from "../data/connection";
import { Estudante } from "../class/Estudantes";
import { stringToDate } from "../stringToDate";

export const createEstudante = async ( req:Request, res: Response):Promise<void> => {
   let errorCode = 400
   try {
      const id = Date.now().toString()
      const {nome, email, data_nascimento, turma_id, hobbies} = req.body

      if(!nome ||
         !email ||
         !hobbies ||
         !turma_id ||
         !data_nascimento
         ){
         errorCode= 422
         throw new Error('Verifique os dados informados, todos atributos e ao menos um Hobbie são necessários para criar o estudante.')
      }

      const data_nasc = stringToDate(data_nascimento)
      const newEstudante = new Estudante(id, nome, email, data_nascimento, turma_id, hobbies) 

      const check = await connection('P_labenuSystem_Estudantes').where('email', email)

      if(check.length > 0){
         errorCode = 409   //Este erro indica que a solicitação atual conflitou com o recurso que está no servidor.
         throw new Error("Este e-mail já consta em nosso sistema, por favor tente novamente.")
      }

      await connection('P_labenuSystem_Estudantes').insert(newEstudante.)


   }



}
import { Request, Response } from "express"
import { connection } from "../data/connection";
import { Estudante } from "../class/Estudantes";
import { stringToDate } from "../stringToDate";

export const createEstudante = async ( req:Request, res: Response):Promise<void> => {
   let errorCode = 400
   try {
      const id = 'S' + Date.now().toString()
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
      const newEstudante = new Estudante(id, nome, email, data_nasc, turma_id, hobbies) 

      const check = await connection('P_labenuSystem_Estudantes').where('email', email)

      if(check.length > 0){
         errorCode = 409   //Este erro indica que a solicitação atual conflitou com o recurso que está no servidor.
         throw new Error("Este e-mail já consta em nosso sistema, por favor tente novamente.")
      }

      await connection('P_labenuSystem_Estudantes').insert(newEstudante.getUserInfo())

      for (let i of hobbies) {
         const rawHobbyId = await connection('P_labenuSystem_Estudantes').select('id').where('nome', 'like', i)
         let hobbyId = ''
         if (rawHobbyId.length === 0) {hobbyId = 'H' + Date.now().toString()} 
         else {hobbyId = rawHobbyId[0].id}
         const idHobbyEstudante = 'HS' + Date.now().toString()
         const estudanteHobbie = {
            id: idHobbyEstudante,
            estudante_id: id,
            hobby_id: hobbyId
         }
         await connection('P_labenuSystem_Estudantes_Hobbies').insert(estudanteHobbie)
      }

      res.status(201).send('Estudante registrado com sucesso')

   }catch(error: any){
      res.status(errorCode).send({message: error.message || error.sqlMessage})
   }
}
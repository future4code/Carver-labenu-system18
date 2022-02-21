import { Request, Response } from "express"
import { connection } from "../data/connection"

export const changeTurma = async(req:Request, res:Response): Promise<void> =>{
   let errorCode = 400
   try {

      const {  estudanteId, turmaId} = req.body

      if(
         !turmaId ||
         !estudanteId 
         ){
          errorCode = 422
          throw new Error('Por favor, verifique os dados informados.')
         }
         
         const checkEstudanteId = await connection('P_labenuSystem_Estudantes').where('id', estudanteId)
         const checkTurmaId = await connection('P_labenuSystem_Turmas').where('id', turmaId)

         if(checkEstudanteId.length === 0 && checkTurmaId.length === 0){
            errorCode = 404  // Not Found error
            throw new Error("Estudante e turma não encontrados")
         }
         await connection.raw(`
         UPDATE P_labenu_System_Estudantes
         SET turma_id = '${turmaId}'
         WHERE id = '${estudanteId}'
         `)

      res.status(200).send('Turma alterada, sucesso')
   } catch (error: any){
      res.status(errorCode).send({message: error.message || error.sqlMessage})
   }

   
}
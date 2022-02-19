import {Response, Request} from "express"
import { Turma } from "../class/Turma"
import { connection } from "../data/connection"

export const createTurma = async(req:Request, res:Response):Promise <void> =>{
   let errorCode = 400

   try {
      const id = "T"+Date.now().toString()
      const {nome, modulo} = req.body

      if(!nome){
         errorCode = 422   //Erro de falta de informação(422)
         throw new Error(`Por favor, verifique as informações novamente`)
      }

      if (modulo > 6 || modulo < 0) {
         errorCode = 422
         throw new Error('O modulo deve ser um valor entre 0 (inativo) e 6')
      }

      const novaTurma = new Turma(id, nome, modulo)

      const checkName = await connection("P_labenuSystem_Turmas").where("nome", nome)

      if(checkName.length > 0){
         errorCode = 409
         throw new Error('O nome desta turma já existe')
      }

      await connection("P_labenuSystem_Turmas").insert(novaTurma)

      res.status(201).send(`Class was created with success`)
   } catch (error:any) {
      res.status(errorCode).send({message:error.message || error.sqlMessage})
   }
}